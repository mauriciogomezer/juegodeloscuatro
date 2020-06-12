/**
 * Documento de peticiones a API REST
 * 
 * @author Josue Hernandez
 * @author Mauricio Gomez
 */
$(document).ready(function(){

    const ENDPOINT = "https://servicios.vlim.com.mx";

    /**
     * Ver los productos
     * 
     * @param {string} Event
     * @param {string} DOMObject
     */
    setTimeout(function(){
        $.ajax({
            url: `${ENDPOINT}/getProductos`,
            dataType: "JSON",
            type: "GET",
            success: (data) => {
                const PRODUCTS = data[0].productos; 
                var html_data = '';
                for(let i = 0; i < PRODUCTS.length; i++){
                    html_data += `
                    <div class="col-12 col-md-4 col-sm-12 mb-3">
                        <div class="card">
                            <div class="card-body">
                                <h4>${PRODUCTS[i].nombre_producto}</h4>
                                <p>Costo por KG: ${PRODUCTS[i].costo_kg}</p>
                                <p>Peso por pieza: ${PRODUCTS[i].peso_pza}</p>
                            </div>
                        </div>
                    </div>
                    `;
                }
                $(".view-products").html(html_data);
            }
        })
    }, 2000);
});