<?php

namespace zaengle\Toolbelt\Errors;

use yii\base\Exception;

class UnparseableVideoIdException extends Exception
{
    /**
     * @inheritDoc
     */
    public function getName(): string
    {
        return 'Could not parse video ID';
    }
}
