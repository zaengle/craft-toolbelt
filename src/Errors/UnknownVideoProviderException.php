<?php

namespace zaengle\Toolbelt\Errors;

use yii\base\Exception;

class UnknownVideoProviderException extends Exception
{
    /**
     * @inheritDoc
     */
    public function getName(): string
    {
        return 'Unknown Video Provider';
    }
}
