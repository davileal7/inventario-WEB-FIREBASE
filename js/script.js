function logout() {
    firebase.auth().signOut().then(() => {
        window.location.href = "/index.html"
    }).catch(() => {
        alert("Erro ao fazer logOut")
    })
}

findInventario()

function findInventario() {
    setTimeout(() => {
        addListaInventarioToScreen(fakeInventario);
    }, 1000)
}

function addListaInventarioToScreen(inventario) {
    const orderList = document.getElementById('inventario');

    inventario.forEach(inventario => {
        const li = document.createElement('li');
        
    
        const produto = document.createElement('p')
        produto.innerHTML = inventario.produto;
        li.appendChild(produto)

        const ml = document.createElement('p')
        ml.innerHTML = inventario.ml;
        li.appendChild(ml)

        const kg = document.createElement('p')
        kg.innerHTML = inventario.kg;
        li.appendChild(kg)

        const fabricado = document.createElement('p')
        fabricado.innerHTML = formatDate(inventario.fabricado);
        li.appendChild(fabricado)

        const validade = document.createElement('p')
        validade.innerHTML = formatDate(inventario.validade);
        li.appendChild(validade)

       

        if (inventario.obeservacao) {
            const obeservacao = document.createElement('p')
            obeservacao.innerHTML = inventario.obeservacao;
            li.appendChild(obeservacao)
        }

    
        orderList.appendChild(li)
    })
}

function formatDate(data) {
    return new Date(data).toLocaleDateString('pt-br')
}


const fakeInventario = [{
    produto: 'Coca Cola',
    unidade: '20',
    ml: '600',
    kg: '0',
    fabricado: '2024-01-04',
    validade: '2025-06-10',
    obeservacao: "Latas"
}, {
    produto: 'Fanta',
    unidade: '12',
    ml: '330',
    kg: '0',
    fabricado: '2024-05-12',
    validade: '2025-03-7',
    obeservacao: ""
}]




const form = document.getElementById('contactForm');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const produto = document.getElementById('produto');
    const unidade = document.getElementById('unidade');
    const ml = document.getElementById('ml');
    const kg = document.getElementById('kg');
    const fabricado = document.getElementById('fabricado');
    const validade = document.getElementById('validade');

    const formData = {
        name: produto.value,
        unidade: unidade.value,
        ml: ml.value,
        kg: kg.value,
        fabricado: fabricado.value,
        validade: validade.value,
    };

    console.log(formData);

    // Clear form fields
    produto.value = '';
    unidade.value = '';
    ml.value = '';
    kg.value = '';
    fabricado.value = '';
    validade.value = '';
});