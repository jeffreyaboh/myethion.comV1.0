/****************************************************************************************
 * LiveZilla kb.js
 *
 * Copyright 2018 LiveZilla GmbH
 * All rights reserved.
 * LiveZilla is a registered trademark.
 *
 ***************************************************************************************/

function KBClass() {
    this.m_Config = null;
}

KBClass.prototype.Search = function() {
    document.getElementById('lz_kb_search_form').submit();
};

KBClass.prototype.Update = function() {
    document.getElementById('lz_kb_clear').style.display = (document.getElementById('lz_kb_input').value.length) ? 'inline-block' : 'none';
    document.getElementById('lz_kb_input').style.paddingRight = (document.getElementById('lz_kb_input').value.length) ? '40px' : '0';
};

KBClass.Clear = function() {
    document.getElementById('lz_kb_input').value='';
    document.getElementById('lz_kb_search_form').submit();
};

var lz_kb = null;

function init(){

    lz_kb = new KBClass();

    if(document.getElementById('rate_good'))
    {
        document.getElementById('rate_good').innerHTML = document.getElementById('rate_good').innerHTML.replace('<!--icon_yes-->',lz_get_icon('','thumbs-o-up','',''));
        document.getElementById('rate_bad').innerHTML = document.getElementById('rate_bad').innerHTML.replace('<!--icon_no-->',lz_get_icon('','thumbs-o-down','',''));
    }
    document.getElementById('lz_kb_clear').innerHTML = lz_get_icon('','close','KBClass.Clear();','');

    if(document.getElementById('lz_kb_date') !== null)
        document.getElementById('lz_kb_date').innerHTML = lz_chat_get_locale_date(document.getElementById('lz_kb_date').innerHTML);

    lz_kb.Update();
}



