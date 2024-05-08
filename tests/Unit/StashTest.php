<?php

use zaengle\Toolbelt\Services\StashService;

describe('Stash Service', function() {
    describe('set()', function() {
        it('sets a value', function() {
            $stash = new StashService();
            $stash->set('foo', 'bar');

            expect($stash->get('foo'))->toBe('bar');
        });

        it('supports dot notation', function() {
            $stash = new StashService();
            $stash->set('foo.bar', 'baz');

            expect($stash->get('foo.bar'))->toBe('baz');
        });

        it('supports dot notation with arrays', function() {
            $stash = new StashService();
            $stash->set('foo.bar', ['baz' => 'qux']);

            expect($stash->get('foo.bar.baz'))->toBe('qux');
        });

        it('supports dot notation with arrays and overwrites', function() {
            $stash = new StashService();
            $stash->set('foo.bar', ['baz' => 'qux']);
            $stash->set('foo.bar', ['baz' => 'quux']);

            expect($stash->get('foo.bar.baz'))->toBe('quux');
        });
    });

    describe('get()', function() {
        it('returns a default value if key does not exist', function() {
            $stash = new StashService();

            expect($stash->get('foo', 'bar'))->toBe('bar');
        });

        it('supports dot notation', function() {
            $stash = new StashService();
            $stash->set('foo.bar', 'baz');

            expect($stash->get('foo.bar'))->toBe('baz');
        });

        it('returns null if key does not exist and no default value is provided', function() {
            $stash = new StashService();

            expect($stash->get('foo'))->toBeNull();
        });
    });

    describe('push()', function() {
        it('pushes a value onto an array', function() {
            $stash = new StashService();
            $stash->set('foo', ['bar']);

            $stash->push('foo', 'baz');

            expect($stash->get('foo'))->toBe(['bar', 'baz']);
        });

        it('uses a Collection if one does not exist', function() {
            $stash = new StashService();
            $stash->push('foo', 'bar');

            $stash->push('foo', 'baz');

            expect($stash->get('foo'))->toBeInstanceOf(\Illuminate\Support\Collection::class)
                ->and($stash->get('foo')->toArray())->toBe(['bar', 'baz']);
        });

        it('throws an error if existing stash is not a Collection or array', function() {
            $stash = new StashService();
            $stash->set('foo', 'bar');

            expect(function() use ($stash) {
                $stash->push('foo', 'baz');
            })->toThrow(new TypeError('Cannot push value, as existing stash for foo is not a Collection or array'));
        });
    });

    describe('pop()', function() {
        it('pops a value from an array', function() {
            $stash = new StashService();
            $stash->set('foo', ['bar', 'baz', 'qux']);

            $popped = $stash->pop('foo');

            expect($popped)->toBe('qux')
                ->and($stash->get('foo'))
                ->toHaveLength(2)
                ->toMatchArray(['bar', 'baz']);
        });

        it('pops a value from a Collection', function() {
            $stash = new StashService();
            $stash->set('foo', collect(['bar', 'baz']));

            expect($stash->pop('foo'))
                ->toBe('baz')
                ->and($stash->get('foo'))
                ->and($stash->get('foo')->toArray())->toBe(['bar']);
        });

        it('throws an error if existing stash is not a Collection or array', function() {
            $stash = new StashService();
            $stash->set('foo', 'bar');

            expect(function() use ($stash) {
                $stash->pop('foo');
            })->toThrow(new TypeError('Cannot pop value, as existing stash for foo is not a Collection or array'));
        });
    });

    describe('has', function() {
       it('returns true if key exists', function() {
           $stash = new StashService();
           $stash->set('foo', 'bar');

           expect($stash->has('foo'))->toBeTrue();
       });
       it('returns false if key does not exist', function() {
           $stash = new StashService();

           expect($stash->has('foo'))->toBeFalse();
       });
       it('supports dot notation', function(){
           $stash = new StashService();
           $stash->set('foo.bar', 'baz');

           expect($stash->has('foo.bar'))->toBeTrue();
       });
    });

    describe('drop()', function(){
       it('removes a key', function(){
           $stash = new StashService();
           $stash->set('foo', 'bar');
           $stash->drop('foo');

           expect($stash->has('foo'))->toBeFalse();
       });

       it('supports dot notation, leaving the parent tree intact', function(){
           $stash = new StashService();
           $stash->set('foo.bar.baz', 'qux');
           $stash->drop('foo.bar.baz');

           expect($stash->has('foo.bar.baz'))
               ->toBeFalse()
               ->and($stash->has('foo.bar'))->toBeTrue();
       });
    });

    describe('clear', function() {
        it('clears all data', function() {
            $stash = new StashService();
            $stash->set('foo', 'bar');
            $stash->set('baz', 'qux');

            $stash->clear();

            expect($stash->get('foo'))->toBeNull()
                ->and($stash->get('baz'))->toBeNull()
                ->and($stash->all)->toBe([]);
        });
    });

    describe('all', function() {
        it('returns all data', function() {
            $stash = new StashService();
            $stash->set('foo', 'bar');
            $stash->set('baz', 'qux');

            expect($stash->all)->toBe(['foo' => 'bar', 'baz' => 'qux']);
        });
    });

    describe('values', function() {
        it('returns all values', function() {
            $stash = new StashService();
            $stash->set('foo.foo2', 'bar');
            $stash->set('baz', 'qux');

            expect($stash->values)->toBe([
                ['foo2' => 'bar'],
                'qux']
            );
        });
    });

    describe('keys', function() {
        it('returns all keys', function() {
            $stash = new StashService();
            $stash->set('foo.foo2', 'bar');
            $stash->set('baz', 'qux');

            expect($stash->keys)->toBe(['foo', 'baz']);
        });
    });

    describe('count', function() {
        it('returns the number of items in the stash', function() {
            $stash = new StashService();
            $stash->set('foo', 'bar');
            $stash->set('baz', 'qux');

            expect($stash->count)->toBe(2);
        });
    });

    describe('isDotNotationKey()', function() {
        it('returns true for dot notation keys', function() {
            expect(StashService::isDotNotationKey('foo.bar'))->toBeTrue();
        });
        it('returns false for non-dot notation keys', function() {
            expect(StashService::isDotNotationKey('foo'))->toBeFalse();
        });
    });
});
