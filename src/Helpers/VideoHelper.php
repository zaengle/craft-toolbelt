<?php

namespace zaengle\Toolbelt\Helpers;

use craft\helpers\App;
use zaengle\Toolbelt\Errors\UnknownVideoProviderException;
use zaengle\Toolbelt\Errors\UnparseableVideoIdException;

class VideoHelper
{
    public const YOUTUBE_URL_PATTERN = '/^https?:\/\/(www\.youtube\.com|youtube\.com|youtu\.be).*\/(watch\?v=)?(.*)/';
    public const VIMEO_URL_PATTERN = '/^https?:\/\/(www\.|player\.)?vimeo\.com\/(video\/)?(\d+)(.*)?/';

    /**
     * @param string $url
     * @return array|null
     * @throws UnknownVideoProviderException|UnparseableVideoIdException
     */
    public static function parseVideoUrl(string $url): ?array
    {
        if (empty($url)) {
            return null;
        }

        try {
            if (preg_match(self::YOUTUBE_URL_PATTERN, $url) > 0) {
                $videoId = self::parseYouTubeId($url) ?: throw new UnparseableVideoIdException();
                $result = [
                    'provider' => 'youtube',
                    'videoId' => $videoId,
                    'url' => $url,
                    'thumbnail' => [
                        'max' => self::ytThumbUrl($videoId),
                        'lg' => self::ytThumbUrl($videoId, 'hqdefault'),
                        'md' => self::ytThumbUrl($videoId, 'mqdefault'),
                        'sm' => self::ytThumbUrl($videoId, 'sddefault'),
                    ],
                ];
            } elseif (preg_match(self::VIMEO_URL_PATTERN, $url, $matches, PREG_OFFSET_CAPTURE) > 0) {
                $videoId = $matches[3][0] ?: throw new UnparseableVideoIdException();
                $result = [
                    'provider' => 'vimeo',
                    'videoId' => $videoId,
                    'url' => $url,
                    'thumbnail' => [
                        'max' => self::vimeoThumbUrl($videoId),
                        'lg' => self::vimeoThumbUrl($videoId, '_large'),
                        'md' => self::vimeoThumbUrl($videoId, '_medium'),
                        'sm' => self::vimeoThumbUrl($videoId, '_small'),
                    ],
                ];
            } else {
                throw new UnknownVideoProviderException();
            }
        } catch (UnknownVideoProviderException|UnparseableVideoIdException $e) {
            if (App::devMode()) {
                throw $e;
            }
            return null;
        }

        return $result;
    }

    /**
     * Extract the video ID from a YouTube URL, ignoring any query params.
     *
     * Handles the `youtube.com/watch?v=ID` form (ID lives in the `v` query
     * param) as well as the path-based forms `youtu.be/ID`, `embed/ID` and
     * `shorts/ID`, where the ID is the last path segment. Tracking params such
     * as the `?si=` on youtu.be share links are ignored.
     */
    private static function parseYouTubeId(string $url): string
    {
        $parts = parse_url($url);
        parse_str($parts['query'] ?? '', $params);

        return $params['v'] ?? basename($parts['path'] ?? '');
    }

    private static function ytThumbUrl(string $id, string $size = 'maxresdefault'): string
    {
        return "https://img.youtube.com/vi/{$id}/{$size}.jpg";
    }
    private static function vimeoThumbUrl(string $id, string $suffix = ''): string
    {
        return "https://vumbnail.com/{$id}{$suffix}.jpg";
    }
}
