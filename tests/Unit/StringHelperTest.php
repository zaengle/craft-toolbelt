<?php

use zaengle\Toolbelt\Errors\UnknownVideoProviderException;
use zaengle\Toolbelt\Helpers\VideoHelper;

describe('VideoHelper', function() {
    describe('Parse Video Url', function() {
        it('returns null if the URL is empty', function() {
            $this->result = VideoHelper::parseVideoUrl('');

            expect($this->result)->toBeNull();
        });

        it('throws an exception if the URL is not a valid video URL', function () {
            $badUrl = 'https://www.example.com';
            expect(fn() => VideoHelper::parseVideoUrl($badUrl))
                ->toThrow(UnknownVideoProviderException::class);
        });

        describe('YouTube Support', function() {

            beforeEach(function() {
                $this->ytUrl = 'https://www.youtube.com/watch?v=9bZkp7q19f0';
                $this->result = VideoHelper::parseVideoUrl($this->ytUrl);
            });

            it('extracts the provider from a youtube URL', function() {
                expect($this->result['provider'])->toBe('youtube');
            });

            it('extracts the video ID from a youtube URL', function() {
                expect($this->result['videoId'])->toBe('9bZkp7q19f0');
            });

            it('Passes through the URL as a "url" key ', function() {
                expect($this->result['url'])->toBe($this->ytUrl);
            });

            it('Has a thumbnails array', function() {
                expect($this->result['thumbnail'])->toBeArray();
            });

            it('Has the expected thumbnail urls', function() {
                expect($this->result['thumbnail']['max'])->toBe('https://img.youtube.com/vi/9bZkp7q19f0/maxresdefault.jpg');
                expect($this->result['thumbnail']['lg'])->toBe('https://img.youtube.com/vi/9bZkp7q19f0/hqdefault.jpg');
                expect($this->result['thumbnail']['md'])->toBe('https://img.youtube.com/vi/9bZkp7q19f0/mqdefault.jpg');
                expect($this->result['thumbnail']['sm'])->toBe('https://img.youtube.com/vi/9bZkp7q19f0/sddefault.jpg');
            });
        });

        describe('Vimeo Support', function() {
            beforeEach(function() {
                $this->vimeoUrl = 'https://vimeo.com/347119375';
                $this->result = VideoHelper::parseVideoUrl($this->vimeoUrl);
            });

            it('extracts the video ID from a Vimeo URL', function() {
                expect($this->result['videoId'])->toBe('347119375');
            });

            it('extracts the provider from a youtube URL', function() {
                expect($this->result['provider'])->toBe('vimeo');
            });

            it('Passes through the URL as a "url" key ', function() {
                expect($this->result['url'])->toBe($this->vimeoUrl);
            });

            it('Has a thumbnails array', function() {
                expect($this->result['thumbnail'])->toBeArray();
            });

            it('Has the expected thumbnail urls', function() {
                expect($this->result['thumbnail']['max'])->toBe('https://vumbnail.com/347119375.jpg');
                expect($this->result['thumbnail']['lg'])->toBe('https://vumbnail.com/347119375_large.jpg');
                expect($this->result['thumbnail']['md'])->toBe('https://vumbnail.com/347119375_medium.jpg');
                expect($this->result['thumbnail']['sm'])->toBe('https://vumbnail.com/347119375_small.jpg');
            });
        });
    });
});
