//jCore library. www.jco.re/#license
function jCore(selector, context) 
{
	if (selector === $.U) return this;
	
	context = context === $.U ? document : context;
	var jcore = new jCore()
	if (typeof selector == 'string')
		jcore.push.apply(jcore, context.querySelectorAll(selector))
	else if (selector instanceof Array)
	{
		jcore.length = 0;
		for (var i in selector) jcore.push(selector[i]);
	}
	else
		jcore.push(selector);
	return jcore
}
$ = jCore
$$ = $.prototype = new Array()
$.U = undefined

$.ajax = function(isGET, url, data, callback)
{
	if (callback === $.U)
	{
		callback = data;
		data = '';
	}
	var xmlhttp,headers,result,contentType;
	contentType = 'content-type';	
	xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function()
	{
	    if (xmlhttp.readyState == 4)
	    {
			headers = xmlhttp.getResponseHeader(contentType);
			result = xmlhttp.responseText;
			if (headers.indexOf('/json') > 0) result = JSON.parse(c);
			callback(result);
	    }
	}
	if (isGET)
		xmlhttp.open('GET', url+'?'+data, 1);		
	else
	{
		xmlhttp.open('POST', url, 1);
		xmlhttp.setRequestHeader(contentType,'application/x-www-form-urlencoded');		
	}
	xmlhttp.send(data);
}
$.post = function(url,data,callback)
{
	return $.ajax(0,url,data,callback);
}
$.get = function(url,data,callback)
{
	return $.ajax(1,url,data,callback);
}


$$.each = function(callback)
{
    for (var i=0; i<this.length; i++) 
		if (i in this) 
			callback.call(this[i]);
}
$$.on = function(eventType, listener)
{
	if (eventType !== $.U)
	this.each(function()
	{	
		if (this.eventList === $.U) this.eventList = [];
		this.eventList.push(listener);
		
		var count = this.eventList.length-1;		 
		this.addEventListener(eventType, function(e)
		{
			if (this.eventList[count].call(this,e) == false) e.preventDefault();
		});		
	})
	return this;
}
$$.off = function(eventType, listener)
{
	this.each(function()
	{
		if (listener !== $.U) this.removeEventListener(eventType, listener);
		else
		for (var i=this.eventList.length-1; i>=0; i--)
		{
			this.removeEventListener(eventType, this.eventList[i]);
			delete this.eventList[i];
		}
	});
	return this;
}
$$._every0 = function(val, key,subKey)
{	
	if (val !== $.U)
	this.each(function()
	{	
		this[key][subKey](val);
	})
	return this;		
}
$$._every = function(val, key)
{	
	if (val === $.U) return !this[0] ? '' : this[0][key]
	this.each(function()
	{	
		this[key] = val;
	})
	return this;		
}
$$._every2 = function(a, b, t)
{	
	if (b === $.U)
	{
		var r = (!this[0] ? '' : this[0][t][a]);
		return r == $.U ? '' : r;
	}
	this.each(function()
	{	
		this[t][a]=b;
	})
	return this;		
}
$$.css = function(property, value)
{
	if (typeof property == 'object')
	{
		for (var i in property)
			this._every2(i, property[i], 'style');

		return this;
	}
	if (value === $.U)
	{
		if (this.length < 1) return '';
		return getComputedStyle(this[0]).getPropertyValue(property);
	}	
	return this._every2(property, value, 'style');	
} 
$$.html = function(html)
{
	return this._every(html, 'innerHTML');
}
$$.attr = function(attribute, value)
{
	return this._every(value, attribute);
}
$$.data = function(key, value)
{
//	b = typeof b == 'object' ? JSON.stringify(b) : b;
	return this._every2(key,value, 'dataset');	
}
$$.val = function(value)
{
	return this._every(value, 'value');
}
$$.toggleClass = function(aClass)
{
	return this._every0(aClass, 'classList', 'toggle');
}
$$.addClass = function(aClass)
{
	return this._every0(aClass, 'classList', 'add');
}
$$.removeClass = function(aClass)
{
	return this._every0(aClass, 'classList', 'remove');
}
$$.remove = function()
{
	this.each(function()
	{
		this.parentElement.removeChild(this);
	})
	return this;
}	
$$.replaceWith = function(newElement)
{
	if (newElement !== $.U) 
	this.each(function()
	{
		if (typeof newElement == 'string')
			this.innerHTML = newElement;
		else
		{
			if (newElement instanceof $) newElement = newElement.get(0);		
			this.parentElement.replaceChild(newElement, this);
		}
	})
	return this;
}
$$.show = function()
{	
	return this.css('display', 'block');
}
$$.hide = function()
{	
	return this.css('display', 'none');
}
$$.toggle = function()
{
	this.each(function()
	{
		this.style.display = (this.style.display != 'none' ? 'none' : '' );
	});
	return this;
}
$$.get = function(index)
{	
	return this[index];
}
$$.parent = function()
{
	return !this[0] ? '' : $(this[0].parentElement);
}	
$$.next = function()
{
	return !this[0] ? '' : $(this[0].nextSibling);
}
$$.prev = function()
{
	return !this[0] ? '' : $(this[0].prevSibling);
}
$$.offset = function()
{
	return !this[0] ? '' : this[0].getBoundingClientRect();
} 
$$.hasClass = function(aClass)
{
	return !this[0] ? false : this[0].classList.contains(aClass);
}
$$.find = function(selector)
{
	return $(selector, this[0]);
}
$$.children = function(selector)
{
	var elements = this[0].childNodes;
	var children = [];
	for (var i=0; i<elements.length; i++) if ($(elements[i]).is(selector)) children.push(elements[i]);
	return $(children);
}
$$.text = function(text)
{
	if (text === $.U)
		return !this[0] ? '' : this[0].innerText || this[0].textContent;				
	return this.html(text);
}
$$.clone = function()
{
	return !this[0] ? new $ : this[0].cloneNode();
}
$$.append = function(element)
{
	this.each(function()
	{
		this.insertAdjacentHTML('beforeend', element);
	})
	return this;
}
$$.is = function(selector)
{
	var element = this[0];
	var fun = (element.mozMatchesSelector || element.msMatchesSelector || element.oMatchesSelector || element.webkitMatchesSelector);
	if (fun === $.U) return false;
	return element[fun.name](selector); 
}
$$.parents = function(selector)
{
	var els = [];
	var parent = this[0].parentNode;
	while (parent) 
	{
		if ($(parent).is(selector) || selector === $.U) els.push(parent);
		parent = parent.parentNode;
	}
	return els;
}
$$.eq = function(index)
{
	var index = (index < 0) ? this.length-index : index;
	return $(this[index]); 
}
$$.lt = function(index)
{
	var index = (index < 0) ? this.length-index : index;
	var els = this.slice(0,index);
	return $(els); 
}
$$.gt = function(index)
{
	var index = (index < 0) ? this.length-index : index;
	var els = this.slice(index+1);
	return $(els);
}
//http://www.javascriptkit.com/javatutors/objdetect3.shtml
$.isWebkit = function()
{
	return !!window.webkitURL;
}
$.isMozilla = function()
{
	return !!window.mozInnerScreenY;
}
$.isOpera = function()
{
	return !!window.opera;
}
$.isIE = function()
{
	return !!document.documentMode;
}
$.prefix = function(property)
{
	var prefixes = '@-webkit-@-moz-@-o-@-ms-@-khtml-'.split('@');
	for (var i in prefixes)
		if (document.body.style[prefixes[i]+property] !== undefined) return prefixes[i];
	return false;
}
$$.animate = function(styles,time, callback)
{
	var prefix = $.prefix('animation');
	if (prefix === false) return this;
	
	var rand = Math.random()*1e5>>>0;
	var CSS = '';
	for (var i in styles)
	{
		CSS += i + ':' + styles[i] + ';';
	}
	$('body').append('<style id="s' + rand + '">@' + prefix + 'keyframes k' + rand + '{to {' + CSS + '}}<'+'/style>');
	
	var timeSec = time/1000;
	this.each(function()
	{
		var curStyle = this.style[prefix+'animation'] + ',k' + rand + ' '+ timeSec + 's linear forwards';
		curStyle = curStyle[0] == ',' ? curStyle.substr(1) : curStyle;
		
		$(this).data('k' + rand, JSON.stringify(CSS) ).on('animationstart', function()
		{
			var loopNum = $(this).data('loop')*1 +1;
			$(this).data('loop', loopNum);

		}).css(prefix+'animation', curStyle).on('animationend', function(ev)
		{
			var loopNum = $(this).data('loop')*1 -1;
			$(this).data('loop', loopNum);
					
			if (loopNum == 0)
			{
				$(this).css(prefix+'animation', '');
				if (callback !== $.U) callback();
			}
			var animCSS = $(this).data(ev.animationName);
			$(this).css( JSON.parse(animCSS) ).data(ev.animationName, '');
		});
	})
	return this;
}
$$.fadeIn = function(time,callback)
{
	this.each(function()
	{
		var current = $(this);
		var opac = current.css('opacity');
		opac = opac === '' ? 1 : opac;	
		current.css('opacity', 0).show().animate({opacity: opac},time,callback);
	})
	return this;
}
$$.fadeOut = function(time,callback)
{
	this.each(function()
	{
		var current = $(this);
		current.animate({opacity: 0},time,function()
		{
			current.css('opacity', '').hide();
			callback();
		});
	})
	return this;
}
$$.serialize = function()
{
	var form = this.get(0);
	if (form == $.U) return '';
	var i,j,elements,type,output,isFine;
	output = [];
	elements = form.elements;
	for (i in elements)
	{
		if (elements[i].name == '') continue;
		isFine = 0;
		type = elements[i].type;
		switch (elements[i].nodeName)
		{
			case 'INPUT':	if (type == 'file') continue;
							if ((type == 'checkbox' || type == 'radio') && !elements[i].checked) continue;
							isFine = 1;							
							break;
			case 'BUTTON':  
			case 'TEXTAREA':isFine = 1;
							break;
			case 'SELECT':	for (j in elements[i].options.length)
								if (elements[i].options[j].selected) 
									output.push(elements[i].name + "=" + encodeURIComponent(elements[i].options[j].value));                                
							break;			
		}
		if (isFine) output.push(elements[i].name +'='+ encodeURIComponent(elements[i].value));
	}
	return output.join("&");
}