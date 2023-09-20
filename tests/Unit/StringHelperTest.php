<?php

use zaengle\Toolbelt\Helpers\StringHelper;

describe('StringHelper', function() {
    describe('md5', function() {
        it('Generates an md5 hash of a string', function() {
            expect(StringHelper::md5('be nice do good'))->toBe('fd3cb71377162f481723ab0c15e9f661');
        });

        it('Returns the expected value for an empty string', function() {
            expect(StringHelper::md5(''))->toBe('d41d8cd98f00b204e9800998ecf8427e');
        });
    });
});
