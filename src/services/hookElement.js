export default function hookElement( component, context ) {
    if ( context.className ) component.className = context.className;
    
    if ( context.id ) component.id = context.id;
    
    if ( context.template ) component.innerHTML = typeof context.template === 'string' ? context.template : context.template();
    
    if ( context.children && context.children.length !== 0) {
        context.children.forEach( Child => {
            new Child( component );
        });
    }

    context.hook.appendChild( component );
}