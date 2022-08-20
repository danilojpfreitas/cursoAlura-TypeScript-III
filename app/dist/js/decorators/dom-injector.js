export function domInjector(seletor) {
    return function (target, propertyKey) {
        console.log(`Modificante protype ${target.constructor.name} e adicionando getter para a propriedade ${propertyKey}`);
        const getter = function () {
            const elemento = document.querySelector(seletor);
            return elemento;
        };
        Object.defineProperty(target, propertyKey, { get: getter });
    };
}
