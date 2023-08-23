<?php

namespace Codilar\Messages\Block;

use Magento\Framework\Serialize\Serializer\Json;
use Magento\Framework\View\Element\Template;
use Magento\Framework\View\Element\Template\Context;
use Magento\Store\Model\ScopeInterface;

class ToastMessageConfigurations extends Template
{

    public const XML_PATH_FOR_SHOW_CLOSE_BUTTON = 'toast_message/general_configuration/show_close_button';

    public const XML_PATH_FOR_MESSAGE_POSITION = 'toast_message/general_configuration/message_position';

    /**
     * @var Json
     */
    private $json;

    /**
     * @param Context $context
     * @param Json $json
     * @param array $data
     */
    public function __construct(
        Template\Context $context,
        Json             $json,
        array $data = []
    ) {
        $this->json = $json;
        parent::__construct($context, $data);
    }

    /**
     * @return array
     */
    public function getConfigurations()
    {
        return [
            'show_close_button' => $this->_scopeConfig->getValue(
                self::XML_PATH_FOR_SHOW_CLOSE_BUTTON,
                ScopeInterface::SCOPE_STORE
            ),
            'message_position' => $this->_scopeConfig->getValue(
                self::XML_PATH_FOR_MESSAGE_POSITION,
                ScopeInterface::SCOPE_STORE
            ),
        ];
    }

    /**
     * @return string
     */
    public function getSerializedConfiguration()
    {
        return $this->json->serialize($this->getConfigurations());
    }
}
