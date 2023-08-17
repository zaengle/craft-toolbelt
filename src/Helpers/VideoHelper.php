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
            if (preg_match(self::YOUTUBE_URL_PATTERN, $url, $matches, PREG_OFFSET_CAPTURE) > 0) {
                $videoId = $matches[3][0] ?: throw new UnparseableVideoIdException();
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

            if (strpos($result['videoId'], '&')) {
                $result['videoId'] = substr($result['videoId'], 0, strpos($result['videoId'], '&'));
            }
        } catch (UnknownVideoProviderException|UnparseableVideoIdException $e) {
            if (App::devMode()) {
                throw $e;
            }
            return null;
        }

        return $result;
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
