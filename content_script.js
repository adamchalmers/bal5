walk(document.body);

document.title = replaceText(document.title);

function walk(node)
{
    // I stole this function from here:
    // http://is.gd/mwZp7E

    var child, next;

    switch ( node.nodeType )
    {
        case 1:  // Element
        case 9:  // Document
        case 11: // Document fragment
            child = node.firstChild;
            while ( child )
            {
                next = child.nextSibling;
                walk(child);
                child = next;
            }
            break;

        case 3: // Text node
            handleText(node);
            break;
    }
}

function handleText(textNode) {
  textNode.nodeValue = replaceText(textNode.nodeValue);
}

function replaceText(v)
{
    v = v.replace(/\bBalfour\b/g, "Bal5");
    v = v.replace(/\bbalfour\b/g, "bal5");

    // Extras to enable later on
    
    /*r = Math.random();
    if (r < 0.4) {
        v = v.replace(/\bBalfour\b/g, "Bal4");
        v = v.replace(/\bbalfour\b/g, "bal4");
    } else if (r < 0.8) {
        v = v.replace(/\bBalfour\b/g, "Bal5");
        v = v.replace(/\bbalfour\b/g, "bal5");
    } else if (r < 0.9) {
        v = v.replace(/\bBalfour\b/g, "Balfour2thefloor");
        v = v.replace(/\bbalfour\b/g, "balfour2thefloor");
    } else {
        v = v.replace(/\bBalfour\b/g, "Bal420");
        v = v.replace(/\bbalfour\b/g, "bal420");
    }
    
    if (r < 0.4) {
        v = v.replace(/\bBalfies\b/g, "Balthrees");
        v = v.replace(/\bbalfies\b/g, "balthrees");       
    } else {
        v = v.replace(/\bBalfies\b/g, "Bal3z");
        v = v.replace(/\bbalfies\b/g, "bal3z"); 
    }
    return v;*/
}