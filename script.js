const senhaCorreta = "1234";

// Produtos organizados por categorias
// Produtos organizados por categorias
const produtos = {

    "Destaques": [
        { codigo: "PA085", nome: "SACHÊ CONTROL WHITE - MAX 120 UNID", preco: 18.40, status: "Valor Promocional", quantidadeMinima: 12 },
        { codigo: "PA061", nome: "PRIMER ÁCIDO FRASCO 9ML", preco: 9.50, status: "Reposição", quantidadeMinima: 12 },
    ],

    "Preparadores": [
        { codigo: "PA009", nome: "PRIMER ADESIVADOR FRASCO 10ML", preco: 8.50, status: "Disponível", quantidadeMinima: 12 },
        { codigo: "PA037", nome: "DESIDRAT FRASCO 9ML", preco: 8.50, status: "Disponível", quantidadeMinima: 12 },
        { codigo: "PA060", nome: "FIBRA DE VIDRO", preco: 10.10, status: "Disponível", quantidadeMinima: 12 },
        { codigo: "PA061", nome: "PRIMER ÁCIDO FRASCO 10ML", preco: 9.50, status: "Disponível", quantidadeMinima: 12 },
        { codigo: "PA068", nome: "PREP NAIL SPRAY FRASCO 350ML", preco: 20.30, status: "Disponível", quantidadeMinima: 12 },
        { codigo: "PA093", nome: "SACHÊ DESITRAT 10ML", preco: 4.00, status: "Disponível", quantidadeMinima: 24 },
        { codigo: "PA096", nome: "SACHÊ PREP REFIL 350ml", preco: 13.20, status: "Indisponível", quantidadeMinima: 16 }
    ],
    "Géis em Sachê": [
        { codigo: "PA076", nome: "SACHÊ GEL BASE 12g", preco: 22.40, status: "Disponível", quantidadeMinima: 12 },
        { codigo: "PA111", nome: "SACHÊ DE GEL BASE PINK 12g", preco: 22.40, status: "Disponível", quantidadeMinima: 12 },
        { codigo: "PA077", nome: "SACHÊ CLASSIC COVER 14g", preco: 22.40, status: "Disponível", quantidadeMinima: 12 },
        { codigo: "PA079", nome: "SACHÊ CLASSIC BLANC 14g", preco: 22.40, status: "Disponível", quantidadeMinima: 12 },
        { codigo: "PA078", nome: "SACHÊ CLASSIC NUDE 14g", preco: 22.40, status: "Baixa disponibilidade", quantidadeMinima: 12 },
        { codigo: "PA080", nome: "SACHÊ CLASSIC CLEAR 14g", preco: 22.40, status: "Disponível", quantidadeMinima: 12 },
        { codigo: "PA081", nome: "SACHÊ CLASSIC CRYSTAL 14g - NOVA COR", preco: 22.40, status: "Disponível", quantidadeMinima: 12 },
        { codigo: "PA088", nome: "SACHÊ CLASSIC BLUSH 14g - LANÇAMENTO", preco: 22.40, status: "Baixa disponibilidade", quantidadeMinima: 12 },
        { codigo: "PA082", nome: "SACHÊ CLASSIC PINK 14g", preco: 22.40, status: "Disponível", quantidadeMinima: 12 },
        { codigo: "PA083", nome: "SACHÊ CONTROL COVER 14g", preco: 22.40, status: "Disponível", quantidadeMinima: 12 },
        { codigo: "PA084", nome: "SACHÊ CONTROL PINK 14g", preco: 22.40, status: "Baixa disponibilidade", quantidadeMinima: 12 },
        { codigo: "PA085", nome: "SACHÊ CONTROL WHITE 14g", preco: 22.40, status: "Disponível", quantidadeMinima: 12 },
        { codigo: "PA118", nome: "SACHÊ CONTROL NUDE 14g", preco: 22.40, status: "Indisponível", quantidadeMinima: 12 },
        { codigo: "PA086", nome: "SACHÊ HARD BLANC 14g", preco: 22.40, status: "Disponível", quantidadeMinima: 12 },
        { codigo: "PA087", nome: "SACHÊ HARD PINK 14g", preco: 22.40, status: "Disponível", quantidadeMinima: 12 },
        { codigo: "PA129", nome: "SACHÊ GEL CLASSIC GLITTER NUDE 14g", preco: 22.40, status: "Disponível", quantidadeMinima: 12 },
        { codigo: "PA130", nome: "SACHÊ GEL CLASSIC GLITTER PINK 14g", preco: 22.40, status: "Baixa disponibilidade", quantidadeMinima: 12 },
        { codigo: "PA131", nome: "SACHÊ GEL CLASSIC GLITTER COVER 14g", preco: 22.40, status: "Disponível", quantidadeMinima: 12 }
    ],
    "Acrílico": [
        { codigo: "PA103", nome: "MONOMER SACHÊ 30 ml", preco: 12.45, status: "Indisponível", quantidadeMinima: 12 },
    { codigo: "PA139", nome: "MONOMER FRASCO 240 ML - LANÇAMENTO", preco: 45.90, status: "Indisponível", quantidadeMinima: 8 },
    { codigo: "PA104", nome: "PÓ ACRÍLICO SACHÊ - SUPER CLEAR 30g", preco: 18.45, status: "Disponível", quantidadeMinima: 12 },
    { codigo: "PA105", nome: "PÓ ACRÍLICO SACHÊ - SUPER BRANCO 30g", preco: 18.45, status: "Disponível", quantidadeMinima: 12 },
    { codigo: "PA106", nome: "PÓ ACRÍLICO SACHÊ - COVER PINK 30g", preco: 18.45, status: "Disponível", quantidadeMinima: 12 },
    { codigo: "PA107", nome: "PÓ ACRÍLICO SACHÊ - COVER NUDE 30g", preco: 18.45, status: "Disponível", quantidadeMinima: 12 },
    { codigo: "PA113", nome: "PÓ ACRÍLICO SACHÊ - COVER BABY 30g", preco: 18.45, status: "Disponível", quantidadeMinima: 12 },
    { codigo: "PA114", nome: "PÓ ACRÍLICO SACHÊ - COVER ROSÉ 30g", preco: 18.45, status: "Disponível", quantidadeMinima: 12 },
    { codigo: "PA132", nome: "POTE PÓ ACRÍLICO COM GLITTER - GOYAVE SHINE 20g", preco: 22.45, status: "Disponível", quantidadeMinima: 6 },
    { codigo: "PA133", nome: "POTE PÓ ACRÍLICO COM GLITTER - PINK SHINE 20g", preco: 22.45, status: "Disponível", quantidadeMinima: 6 },
    { codigo: "PA134", nome: "POTE PÓ ACRÍLICO COM GLITTER - BABY SHINE 20g", preco: 22.45, status: "Disponível", quantidadeMinima: 6 },
    { codigo: "PA135", nome: "POTE PÓ ACRÍLICO COM GLITTER - NUDE SHINE 20g", preco: 22.45, status: "Disponível", quantidadeMinima: 6 },
    { codigo: "PA136", nome: "POTE PÓ ACRÍLICO COM GLITTER - NATURAL SHINE 20g", preco: 22.45, status: "Disponível", quantidadeMinima: 6 },
    { codigo: "PA137", nome: "POTE PÓ ACRÍLICO COM GLITTER - BLANC SHINE 20g", preco: 22.45, status: "Disponível", quantidadeMinima: 6 }
    ],
    "Top Coat": [
    { codigo: "PA025", nome: "TOP COAT BRILHO CLEAR FRASCO 9g", preco: 22.20, status: "Disponível", quantidadeMinima: 12 },
    { codigo: "PA050", nome: "TOP COAT GOLD FRASCO 9g", preco: 22.20, status: "Disponível", quantidadeMinima: 12 },
    { codigo: "PA051", nome: "TOP COAT SILVER FRASCO 9g", preco: 22.20, status: "Disponível", quantidadeMinima: 12 },
    { codigo: "PA092", nome: "TOP COAT PINK FRASCO 9g", preco: 22.20, status: "Disponível", quantidadeMinima: 12 },
    { codigo: "PA112", nome: "TOP COAT COVER FRASCO 9g", preco: 22.20, status: "Disponível", quantidadeMinima: 12 },
    { codigo: "PA117", nome: "TOP COAT BLANC FRASCO 9g", preco: 22.20, status: "Disponível", quantidadeMinima: 12 },
    { codigo: "PA119", nome: "TOP COAT HOLOSHINE FRASCO 9g", preco: 22.20, status: "Baixa disponibilidade", quantidadeMinima: 12 },
    { codigo: "PA120", nome: "TOP COAT EGGSHELL MATTE FRASCO 9g", preco: 22.20, status: "Disponível", quantidadeMinima: 12 },
    { codigo: "PA121", nome: "TOP COAT BUTTERFLY PINK FRASCO 9g", preco: 22.20, status: "Disponível", quantidadeMinima: 6 },
    { codigo: "PA122", nome: "TOP COAT ROSÉ GOLD FRASCO 9g", preco: 22.20, status: "Disponível", quantidadeMinima: 6 },
    { codigo: "PA140", nome: "TOP COAT EGGSHELL SILVER FRASCO 9g", preco: 22.20, status: "Baixa disponibilidade", quantidadeMinima: 12 },
    { codigo: "PA099", nome: "SACHÊ 9g TOP COAT SILVER", preco: 17.95, status: "Disponível", quantidadeMinima: 12 },
    { codigo: "PA100", nome: "SACHÊ 9g TOP COAT GOLD", preco: 17.95, status: "Disponível", quantidadeMinima: 12 },
    { codigo: "PA109", nome: "SACHÊ 9g TOP COAT PINK", preco: 17.95, status: "Disponível", quantidadeMinima: 12 },
    { codigo: "PA110", nome: "SACHÊ 9g TOP COAT COVER", preco: 17.95, status: "Disponível", quantidadeMinima: 12 },
    { codigo: "PA116", nome: "SACHE 9G TOP COAT BLANC", preco: 17.95, status: "Disponível", quantidadeMinima: 12 },
    { codigo: "PA125", nome: "SACHÊ TOP COAT EGGSHELL MATTE 9G", preco: 17.95, status: "Baixa disponibilidade", quantidadeMinima: 12 }
    ],
    "Potes e Frascos": [
    { codigo: "VL0048", nome: "POTE C/ TAMPA VÒLIA ECO VERDE ÁGUA 30g", preco: 3.90, status: "Disponível", quantidadeMinima: 120 },
    { codigo: "VL0049", nome: "POTE C/ TAMPA VÒLIA ECO AZUL CELESTE 30g", preco: 3.90, status: "Disponível", quantidadeMinima: 120 },
    { codigo: "VL0050", nome: "POTE C/ TAMPA VÒLIA ECO ROSA CANDY 30g", preco: 3.90, status: "Indisponível", quantidadeMinima: 120 },
    { codigo: "VL0051", nome: "POTE C/ TAMPA VÒLIA ECO LAVANDA 30g", preco: 3.90, status: "Disponível", quantidadeMinima: 120},
    { codigo: "VL0048", nome: "POTE C/ TAMPA VÒLIA ECO VERDE ÁGUA 30g", preco: 4.60, status: "Disponível", quantidadeMinima: 12 },
    { codigo: "VL0049", nome: "POTE C/ TAMPA VÒLIA ECO AZUL CELESTE 30g", preco: 4.60, status: "Disponível", quantidadeMinima: 12 },
    { codigo: "VL0050", nome: "POTE C/ TAMPA VÒLIA ECO ROSA CANDY 30g", preco: 4.60, status: "Indisponível", quantidadeMinima: 12 },
    { codigo: "VL0051", nome: "POTE C/ TAMPA VÒLIA ECO LAVANDA 30g", preco: 4.60, status: "Disponível", quantidadeMinima: 12},
    { codigo: "VL0024", nome: "FRASCO PET LILÁS 60mL", preco: 2.90, status: "Disponível", quantidadeMinima: 60 }
    ],
    "Lixas e Finalizadores": [
    { codigo: "VL0027", nome: "LIXA 100", preco: 2.50, status: "Disponível", quantidadeMinima: 24 },
    { codigo: "VL0028", nome: "LIXA 150", preco: 2.50, status: "Disponível", quantidadeMinima: 24 },
    { codigo: "VL0029", nome: "LIXA 180", preco: 2.50, status: "Disponível", quantidadeMinima: 24 },
    { codigo: "VL0030", nome: "LIXA 220", preco: 2.50, status: "Disponível", quantidadeMinima: 24 },
    { codigo: "VL0033", nome: "LIXA SLIM 120/150", preco: 2.50, status: "Disponível", quantidadeMinima: 24 },
    { codigo: "PA101", nome: "SACHÊ DE CREME PARFUM 14g", preco: 4.00, status: "Disponível", quantidadeMinima: 36 },
    { codigo: "PA115", nome: "SACHÊ 10mL ÒLEO DE PARFUM", preco: 6.30, status: "Indisponível", quantidadeMinima: 24 }
    ],
    "Esmaltes": [
    { codigo: "PA063", nome: "ESMALTE EM GEL - PINK METALIZADO 9g", preco: 12.90, status: "Indisponível", quantidadeMinima: 12 },
    { codigo: "PA066", nome: "ESMALTE EM GEL - BABY CORAL 9g", preco: 12.90, status: "Baixa disponibilidade", quantidadeMinima: 12 },
    { codigo: "PA067", nome: "ESMALTE EM GEL - AZUL CINDERELA 9g", preco: 12.90, status: "Baixa disponibilidade", quantidadeMinima: 12 },
    { codigo: "PA069", nome: "ESMALTE EM GEL - MY GLOSSY PURPLE PINK 9g", preco: 12.90, status: "Disponível", quantidadeMinima: 12 },
    { codigo: "PA089", nome: "ESMALTE EM GEL - PRETO 9g", preco: 12.90, status: "Disponível", quantidadeMinima: 12 },
    { codigo: "PA090", nome: "ESMALTE EM GEL - BRANCO 9g", preco: 12.90, status: "Indisponível", quantidadeMinima: 12 },
    { codigo: "PA102", nome: "ESMALTE EM GEL - FÚCSIA METALIZADO 9g", preco: 12.90, status: "Baixa disponibilidade", quantidadeMinima: 12 }
    ]
};


// Verifica a senha e exibe a tela de pedidos
function checkPassword() {
    const senha = document.getElementById("password").value;
    if (senha === senhaCorreta) {
        document.getElementById("login-screen").classList.add("hidden");
        document.getElementById("pedido-screen").classList.remove("hidden");
        carregarProdutosPorCategoria();
    } else {
        alert("Senha incorreta!");
    }
}

// Carregar produtos organizados por categoria
function carregarProdutosPorCategoria() {
    const container = document.getElementById("categorias-container");
    container.innerHTML = "";

    for (let categoria in produtos) {
        let categoriaDiv = document.createElement("div");
        categoriaDiv.classList.add("categoria");

        let tituloCategoria = document.createElement("h2");
        tituloCategoria.innerText = categoria;
        categoriaDiv.appendChild(tituloCategoria);

        let tabela = document.createElement("table");
        tabela.innerHTML = `
            <tr>
                <th>Código</th>
                <th>Produto</th>
                <th>Status</th>
                <th>Preço (unidade)</th>
                <th>Quantidade Mínima</th>
                <th>Quantidade</th>
                <th>Valor Total</th>
            </tr>
        `;

        produtos[categoria].forEach((produto, index) => {
            let linha = document.createElement("tr");
 
            let statusColor;

            if (produto.status === "Indisponível") 
            {
                statusColor = "grey"; // cinza
            } 
            else if (produto.status === "Baixa disponibilidade") 
            {
                statusColor = "orange"; // ou "yellow", mas "orange" é mais visível
            } 
            else 
            {
                statusColor = "black";
            }
        
            linha.innerHTML = `
            <td>${produto.codigo}</td>
            <td>${produto.nome}</td>
            <td style="color: ${statusColor}" class="${produto.status === "Indisponível" ? 'indisponivel' : ''}">${produto.status}</td>
            <td>R$ ${produto.preco.toFixed(2)}</td>
            <td>${produto.quantidadeMinima}</td>
            <td>
                <div style="display: flex; align-items: center; gap: 5px;">
                    <button type="button" onclick="alterarQuantidade('${categoria}', ${index}, -${produto.quantidadeMinima})" ${produto.status === "Indisponível" ? "disabled" : ""}>–</button>
                    <span id="quantidade-${categoria}-${index}">0</span>
                    <button type="button" onclick="alterarQuantidade('${categoria}', ${index}, ${produto.quantidadeMinima})" ${produto.status === "Indisponível" ? "disabled" : ""}>+</button>
                </div>
            </td>
            <td id="valor-total-${categoria}-${index}">R$ 0.00</td>
        `;
            tabela.appendChild(linha);           
        });

        categoriaDiv.appendChild(tabela);
        container.appendChild(categoriaDiv);
    }   
}

// Atualizar o total do pedido com base no conteúdo do <span>
function alterarQuantidade(categoria, index, quantidadeAlterada) {
    let spanQuantidade = document.getElementById(`quantidade-${categoria}-${index}`);
    let quantidadeAtual = parseInt(spanQuantidade.textContent);

    // Calculando a nova quantidade
    let novaQuantidade = quantidadeAtual + quantidadeAlterada;

    // Verificando se a quantidade não pode ser menor que zero
    if (novaQuantidade < 0) {
        novaQuantidade = 0;
    }

    // Atualizando a quantidade no span
    spanQuantidade.textContent = novaQuantidade;

    // Atualizando o valor total
    atualizarTotal();
}


// Gerar pedido formatado
function gerarPedido() {
    let nomeCliente = document.getElementById("cliente").value.trim();
    if (!nomeCliente) {
        alert("Por favor, insira o nome do cliente. (No início da página ⬆️)");
        return;
    }

    let pedidoTexto = `PEDIDO (${nomeCliente})\n\n`;
    let pedidoHtml = `<h2>Pedido de ${nomeCliente}</h2><ul>`;

    let total = 0;
    for (let categoria in produtos) {
        produtos[categoria].forEach((produto, index) => {
            let spanQuantidade = document.getElementById(`quantidade-${categoria}-${index}`);
            let quantidade = parseInt(spanQuantidade.textContent); // 👍

            if (quantidade > 0) {
                let subtotal = quantidade * produto.preco;
                total += subtotal;

                let linhaPedido = `${quantidade} UNIDADES - ${produto.codigo} - ${produto.nome} - R$${subtotal.toFixed(2)}`;
                pedidoTexto += linhaPedido + "\n";
                pedidoHtml += `<li>${linhaPedido}</li>`;
            }
        });
    }

    pedidoTexto += `\nTOTAL: R$${total.toFixed(2)}`;
    pedidoHtml += `</ul><h3>TOTAL: R$${total.toFixed(2)}</h3>`;

    // Exibe pedido no HTML
    document.getElementById("pedido-final").innerHTML = pedidoHtml;

    // Adiciona os botões
    let botoes = `
        <button onclick="copiarPedido()">Copiar</button>
        <button onclick="baixarPDF()">Baixar PDF</button>
        <button onclick="compartilharWhatsApp()">Compartilhar no WhatsApp</button>
    `;
    document.getElementById("botoes-pedido").innerHTML = botoes;
}


    function alterarQuantidade(categoria, index, quantidadeMinima) {
        const span = document.getElementById(`quantidade-${categoria}-${index}`);
        let atual = parseInt(span.textContent) || 0;
        atual += quantidadeMinima;
        if (atual < 0) atual = 0;
        span.textContent = atual;
        atualizarTotal();
    }
    
    function atualizarTotal() {
        let totalGeral = 0;
    
        for (let categoria in produtos) {
            produtos[categoria].forEach((produto, index) => {
                const spanQuantidade = document.getElementById(`quantidade-${categoria}-${index}`);
                const quantidade = parseInt(spanQuantidade.textContent) || 0;
    
                const valorTotal = quantidade * produto.preco;
                const campoValorTotal = document.getElementById(`valor-total-${categoria}-${index}`);
                if (campoValorTotal) {
                    campoValorTotal.textContent = `R$ ${valorTotal.toFixed(2)}`;
                }
    
                totalGeral += valorTotal;
            });
        }
    
        // Atualiza o total geral na página (certifique-se de ter um elemento com id="total")
        const campoTotalGeral = document.getElementById("total");
        if (campoTotalGeral) {
            campoTotalGeral.textContent = `R$ ${totalGeral.toFixed(2)}`;
        }
    }
    
    // Criar botões de ações
    let botoes = `
        <button onclick="copiarPedido()">Copiar</button>
        <button onclick="baixarPDF()">Baixar PDF</button>
        <button onclick="compartilharWhatsApp()">Compartilhar no WhatsApp</button>
    `;
    document.getElementById("pedido-final").innerHTML += botoes;


// Copiar pedido para a área de transferência
function copiarPedido() {
    let pedidoTexto = document.getElementById("pedido-final").innerText;
    navigator.clipboard.writeText(pedidoTexto);
    alert("Pedido copiado!");
}

// Baixar pedido como PDF
function baixarPDF() {
    const { jsPDF } = window.jspdf;
    let doc = new jsPDF();

    let pedidoTexto = document.getElementById("pedido-final").innerText;
    let linhas = pedidoTexto.split("\n");

    // Adiciona o título "Pedido Gerado"
    doc.setFont("helvetica", "bold");
    doc.text("Pedido Gerado", 8, 8);

    // Configura a fonte para o corpo do texto
    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);

    let y = 20; // Posição inicial para a primeira linha
    linhas.forEach((linha) => {
        doc.text(linha, 10, y);
        y += 10; // Ajusta o espaçamento entre as linhas
    });

    // Salva o documento como "pedido.pdf"
    doc.save("pedido.pdf");
}

// Compartilhar no WhatsApp
function compartilharWhatsApp() {
    let pedidoTexto = document.getElementById("pedido-final").innerText;
    let mensagem = encodeURIComponent(pedidoTexto);
    let url = `https://api.whatsapp.com/send?text=${mensagem}`;
    window.open(url, "_blank");
}

