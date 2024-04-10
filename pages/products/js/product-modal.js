const productsData = {
   "sm-1": {
      productName: "Quantum Fusion X",
      price: 1600,
      imageUrl: "./img/smartphones/smartphone-01.jpg",
      hardware: {
         screen: 'Tela: 6.5" Super AMOLED',
         cpu: 'Processador: Octa-Core',
         storage: 'Armazenamento: 128GB',
         camera: 'Câmera: Tripla 48MP, 20MP frontal',
         battery: 'Bateria: 4500mAh',
         os: 'Sistema: Android 11'
      }
   },
   "sm-2": {
      productName: "Thunderbyte Hyper X9",
      price: 2500,
      imageUrl: "./img/smartphones/smartphone-02.jpg",
      hardware: {
         screen: 'Tela: 6.3" OLED',
         cpu: 'Processador: Deca-Core AI',
         storage: 'Armazenamento: 512GB',
         camera: 'Câmera: Dupla 108MP, 40MP',
         battery: 'Bateria: 6000mAh',
         os: 'Sistema: ThunderOS (baseado no Android 12)'
      }
   },
   "sm-3": {
      productName: "Nexus Pulse Pro",
      price: 1200,
      imageUrl: "./img/smartphones/smartphone-03.jpg",
      hardware: {
         screen: 'Tela: 6.7" 120Hz',
         cpu: 'Processador: Octa-core',
         storage: 'Armazenamento: 256GB',
         camera: 'Câmera: Quádrupla 64MP, 32MP frontal',
         battery: 'Bateria: 5000mAh',
         os: 'Sistema: Android 12'
      }
   },
   "lp-1": {
      productName: "Nexus Titan X",
      price: 3499,
      imageUrl: "./img/laptops/laptop-01.jpg",
      hardware: {
         cpu: 'Processador: Intel Core i7-11th Gen',
         ram: 'RAM: 16GB DDR4',
         storage: 'Armazenamento: SSD 512GB NVMe',
         gpu: 'GPU: NVIDIA GeForce RTX 3070, 8GB, GDDR6',
         screen: 'Tela: 15.6" IPS, 144Hz, 1920 x 1080'
      }
   },
   "lp-2": {
      productName: "StellarForce Eon X",
      price: 3899,
      imageUrl: "./img/laptops/laptop-02.jpg",
      hardware: {
         cpu: 'Processador: AMD Ryzen 9 5900X',
         ram: 'RAM: 32GB DDR4',
         storage: 'Armazenamento: SSD 1TB PCIe Gen4',
         gpu: 'GPU: NVIDIA GeForce RTX 3080, 10GB GDDR6X',
         screen: 'Tela: 17.3" QHD IPS, 165Hz, 1920 x 1080'
      }
   },
   "lp-3": {
      productName: "Quantum Apex Pro",
      price: 2999,
      imageUrl: "./img/laptops/laptop-03.jpg",
      hardware: {
         cpu: 'Processador: AMD Ryzen 7 5800H',
         ram: 'RAM: 32GB DDR4',
         storage: 'Armazenamento: SSD NVMe de 1TB',
         gpu: 'GPU: NVIDIA GeForce RTX 3060, 6GB GDDR6',
         screen: 'Tela: 15.6" IPS, 144Hz, 1920 x 1080'
      }
   },
   "sw-1": {
      productName: "Aurora SmartTime 2000",
      price: 900,
      imageUrl: "./img/smartwatches/smartwatch-01.jpg",
      hardware: {
         cpu: "Processador: QuantumCore X2",
         screen: "Tela: Retina Dynamic Display",
         storage: "Armazenamento: 64 GB",
         connectivity: "Conectividade: Wi-Fi 802.11b/g/n/ac, Bluetooth 5.1",
         sensor: "Sensor: Sensor de pulso QuantumHeart"
      }
   },
   "sw-2": {
      productName: "NeoTech NovaWatch 3X",
      price: 1200,
      imageUrl: "./img/smartwatches/smartwatch-02.jpg",
      hardware: {
         cpu: "Processador: NeoCore Ultra",
         screen: "Tela: NeoGlow HD Display",
         storage: "Armazenamento: 128 GB",
         connectivity: "Conectividade: Wi-Fi 802.11a/b/g/n, Bluetooth 5.2, NFC",
         sensor: "Sensor: Sensor NeoPulse HRX"
      }
   },
   "sw-3": {
      productName: "Eclipse Horizon E400",
      price: 700,
      imageUrl: "./img/smartwatches/smartwatch-03.jpg",
      hardware: {
         cpu: "Processador: SolarCore V3",
         screen: "Tela: LunarView AMOLED",
         storage: "Armazenamento: 32 GB",
         connectivity: "Conectividade: Wi-Fi 802.11b/g/n, Bluetooth 5.0",
         sensor: "Sensor: Sensor de frequência cardíaca Eclipse Pulse"
      }
   }
}

function clearModalData() {
   modalContent.innerHTML = ``;
   selectedProductID = "";
}

function validateCardInput() {
   const input = document.querySelector("#card-number");
   const lastChar = input.value[input.value.length - 1];

   if (!Number(lastChar)) {
      input.value = input.value.substring(0, input.value.length - 1);
   } else {
      input.value = input.value.replace(/(\d{4})(?=\d)/g, '$1 ');
   }
}

function setParcels() {
   const parcels = document.querySelector("#parcels");
   const productQuant = Number(document.querySelector("#qtd").textContent);
   parcels.innerHTML = "<option hidden>Parcelas</option>";

   for (let i = 1; i <= 10; i++) {
      parcels.innerHTML += `
      <option>${i}x de R$ ${(productsData[selectedProductID].price * productQuant / i).toFixed(2)}</option>
      `
   }
}

function updateProductPrice(qtd) {
   const productPrice = document.querySelector("#product-price");

   productPrice.textContent = `R$ ${productsData[selectedProductID].price * qtd}`;
}

function removeProduct() {
   const qtd = document.querySelector("#qtd");

   if (Number(qtd.textContent) > 1) {
      qtd.textContent = Number(qtd.textContent) - 1;
   }

   updateProductPrice(Number(qtd.textContent));
   setParcels();
}

function addProduct() {
   const qtd = document.querySelector("#qtd");

   if (Number(qtd.textContent) < 10) {
      qtd.textContent = Number(qtd.textContent) + 1;
   }

   updateProductPrice(Number(qtd.textContent));
   setParcels();
}

function setModalData(id) {
   let hardwareSpechContent = "";

   console.log(id);

   if (id.includes("sm")) {
      hardwareSpechContent = `
         <div class="spech">
            <img src="./img/svg/screen-2.svg">
            <p>${productsData[id].hardware.screen}</p>
         </div>

         <div class="spech">
            <img src="./img/svg/cpu.svg">
            <p>${productsData[id].hardware.cpu}</p>
         </div>

         <div class="spech">
            <img src="./img/svg/storage-2.svg">
            <p>${productsData[id].hardware.storage}</p>
         </div>

         <div class="spech">
            <img src="./img/svg/camera.svg">
            <p>${productsData[id].hardware.camera}</p>
         </div>

         <div class="spech">
            <img src="./img/svg/battery.svg">
            <p>${productsData[id].hardware.battery}</p>
         </div>
      `
   }
   else if (id.includes("lp")) {
      hardwareSpechContent = `
      <div class="spech">
         <img src="./img/svg/cpu.svg">
         <p>${productsData[id].hardware.cpu}</p>
      </div>

      <div class="spech">
         <img src="./img/svg/ram.svg">
         <p>${productsData[id].hardware.ram}</p>
      </div>

      <div class="spech">
         <img src="./img/svg/storage-2.svg">
         <p>${productsData[id].hardware.storage}</p>
      </div>

      <div class="spech">
         <img src="./img/svg/gpu.svg">
         <p>${productsData[id].hardware.gpu}</p>
      </div>

      <div class="spech">
         <img src="./img/svg/screen-1.svg">
         <p>${productsData[id].hardware.screen}</p>
      </div>
      `
   }
   else {
      hardwareSpechContent = `
      <div class="spech">
         <img src="./img/svg/cpu.svg">
         <p>${productsData[id].hardware.cpu}</p>
      </div>

      <div class="spech">
         <img src="./img/svg/screen-2.svg">
         <p>${productsData[id].hardware.screen}</p>
      </div>
   
      <div class="spech">
         <img src="./img/svg/storage-1.svg">
         <p>${productsData[id].hardware.storage}</p>
      </div>

      <div class="spech">
         <img src="./img/svg/connectivity.svg">
         <p>${productsData[id].hardware.connectivity}</p>
      </div>

      <div class="spech">
         <img src="./img/svg/sensor.svg">
         <p>${productsData[id].hardware.sensor}</p>
      </div>
      `
   }

   modalContent.innerHTML += `
      <img src="${productsData[id].imageUrl}" alt>

      <div class="product-data">
         <h1 class="ttf-6">${productsData[id].productName}</h1>
         <span class="txf-2" id="product-price">R$ ${productsData[id].price}</span>

         <div class="product-qtd">
            <button id="remove-qtd" class="qtd-btn" onclick="removeProduct()">-</button>
            <span id="qtd">1</span>
            <button id="add-qtd" class="qtd-btn" onclick="addProduct()">+</button>
         </div>

         <div class="payment-method">
            <p class="txf-4">Escolha a forma de pagamento: </p>
            <div class="payment-method-options">
               <input type="radio" id="full" name="payment" class="payment-option">
               <label for="full" class="txf-5">À Vista</label>

               <input type="radio" id="card" name="payment" class="payment-option">
               <label for="card" class="txf-5">Cartão de Crédito</label>

               <div class="payment-option-1 txf-5">
                  <button>
                     <img src="./img/svg/boleto.svg" alt>
                     <p>BOLETO</p>
                  </button>

                  <button>
                     <img src="./img/svg/pix.svg" alt>
                     <p>PIX</p>
                  </button>
               </div>

               <div class="payment-option-2">
                  <div class="payment-input-container">
                     <img src="./img/svg/card.svg">
                     <input type="text" class="input txf-7" id="card-number" maxlength="19" oninput="validateCardInput()" placeholder="Número do Cartão">
                  </div>

                  <div class="payment-input-container">
                     <img src="./img/svg/cpf.svg">
                     <input type="text" class="input txf-7" id="cpf" placeholder="CPF">
                  </div>

                  <div class="payment-input-container">
                     <div class="two-col-container">
                        <img src="./img/svg/cvv.svg" alt>
                        <input type="number" class="input txf-7" maxlength="3" id="cvv" placeholder="CVV">
                     </div>

                     <div class="two-col-container">
                        <img src="./img/svg/expiration.svg" alt>
                        <input type="date" class="input txf-7" id="due-date" placeholder="Vencimento">
                     </div>
                  </div>

                  <div class="payment-input-container">
                     <img src="./img/svg/parcels.svg">
                     <select class="input txf-7" id="parcels"></select>
                  </div>              
               </div>

            </div>
         </div>

         <div class="hardware-spechs">
            <span class="sep"></span>
            <h1 class="ttf-7 hardware-title">Hardware</h1>
            
            <div class="spechs-container txf-6">
               ${hardwareSpechContent}
            </div>
         </div>

         <button class="confirm-buy-btn btn-3">
            <img src="./img/svg/cart.svg">
            Finalizar Compra</button>
      </div>
   `
   setParcels();
}

function hideModal() {
   purchaseModal.classList.remove("modal-active");
   modalBackground.classList.remove("modalbg-active");

   setTimeout(() => {
      purchaseModal.style.display = "none";
      modalBackground.style.display = "none";

      clearModalData();
   }, 1000);
}

function showModal(evt) {
   purchaseModal.style.display = "block";
   modalBackground.style.display = "block";

   setTimeout(() => {
      purchaseModal.classList.add("modal-active");
      modalBackground.classList.add("modalbg-active");
   }, 100);

   selectedProductID = evt.currentTarget.id;
   setModalData(selectedProductID);
}

let selectedProductID = "";
let inputBuffer = "";

const buyBtns = document.querySelectorAll(".buy-btn");
buyBtns.forEach((btn) => {
   btn.addEventListener("click", showModal);
});

const modalBackground = document.querySelector(".modal-background-effect");
const purchaseModal = document.querySelector(".purchase-modal");
const modalContent = document.querySelector(".purchase-modal-content");
const exitBtn = document.querySelector(".exit-btn");
exitBtn.addEventListener("click", hideModal);
