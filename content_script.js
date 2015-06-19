walk(document.body);

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

function handleText(textNode) 
{
    var v = textNode.nodeValue;

    v = v.replace(/\bBalfour\b/g, "Bal5");
    v = v.replace(/\bbalfour\b/g, "bal5");
    v = v.replace(/\bbalfies\b/g, "bal3s");
    v = v.replace(/\bBalfies\b/g, "Bal3s");
    
    textNode.nodeValue = v;
}