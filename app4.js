;(function(document) {
	var shadow = document.querySelector('sonny').createShadowRoot();
	var link = document.querySelector("link[rel='import']");
	var template = link.import.querySelector('template');
	var clone = document.importNode(template.content, true);

	shadow.appendChild(clone);
}(document));
