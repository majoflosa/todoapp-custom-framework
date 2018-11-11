export default function hookElement( component, context, data = {} ) {
    if ( context.className ) component.className = context.className;
    
    if ( context.id ) component.id = context.id;
    
    component.innerHTML = '';
    if ( context.template ) 
        component.innerHTML = typeof context.template === 'string' ? context.template : context.template( data );
    
    if ( context.children && context.children.length !== 0) {
        context.children.forEach( Child => {
            new Child( component );
        });
    }

    // context.hook.innerHTML = '';
    context.hook.appendChild( component );

    if (context.cacheDOM ) context.cacheDOM();
}