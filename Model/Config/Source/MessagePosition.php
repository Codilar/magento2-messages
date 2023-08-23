<?php

namespace Codilar\Messages\Model\Config\Source;

class MessagePosition implements \Magento\Framework\Data\OptionSourceInterface
{

    /**
     * @inheritDoc
     */
    public function toOptionArray()
    {
        return [
            ['value' => 'toast-top-right', 'label' => __('Top Right')],
            ['value' => 'toast-bottom-right', 'label' => __('Bottom Right')],
            ['value' => 'toast-bottom-left', 'label' => __('Bottom Left')],
            ['value' => 'toast-top-left', 'label' => __('Top Left')],
            ['value' => 'toast-top-full-width', 'label' => __('Top Full Width')],
            ['value' => 'toast-bottom-full-width', 'label' => __('Bottom Full Width')],
            ['value' => 'toast-top-center', 'label' => __('Top Center')],
            ['value' => 'toast-bottom-center', 'label' => __('Bottom Center')],
        ];
    }

    /**
     * Get options in "key-value" format
     *
     * @return array
     */
    public function toArray()
    {
        return [0 => __('No'), 1 => __('Yes')];
    }
}
