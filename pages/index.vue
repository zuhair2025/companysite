<template>
    <MainLayout>

      <section class="container mx-auto" data-aos="fade-up" data-aos-duration="2000" data-aos-once="true">
          <div class="mt-20 mb-20">
              <p class="text-center font-black text-3xl">Know Well</p>
              <p class="text-center font-thin text-sm px-5 pt-3 md:text-base">PayWell acts as a one-stop solution for various payments through a large network of outlets, providing users the most convenient way to pay. The retail outlets are available throughout the country and operate long hours to make it easier for users to pay and organizations to sell. You can visit nearby PayWell outlet to recharge your mobile phone, pay utility bills and fees, buy tickets and online products. Our uniquely strong combination of local shops, internet and distribution channels are simplifying payments every day, making it easier, secure and faster!</p>
          </div>
      </section>
      <!-- Our Services -->
      <Services />
      
      <!-- Corporate Section -->
      <Corporate />

      <!-- Counter -->
      <section class="text-white text-center items-center px-20 grid grid-cols-1 bg-[url('/bg1.jpg')] bg-cover bg-no-repeat py-20 gap-8 md:grid-cols-6">
          <div class="flex flex-col items-center">
              <Icon name="mdi:handshake" size="40" class="text-green-600"/>
              <h1 class="font-extrabold text-3xl">26</h1>
              <p class="text-sm">Procuct Partner</p>
          </div>
          <div class="flex flex-col items-center gap-3">
              <Icon name="mdi:handshake" size="40" class="text-green-600"/>
              <h1 class="font-extrabold text-3xl">55802</h1>
              <p class="text-sm">Registered Merchants</p>
          </div>
          <div class="flex flex-col items-center gap-3">
              <Icon name="mdi:handshake" size="40" class="text-green-600"/>
              <h1 class="font-extrabold text-3xl">360</h1>
              <p class="text-sm">Corporate Clients</p>
          </div>
          <div class="flex flex-col items-center">
              <Icon name="mdi:handshake" size="40" class="text-green-600"/>
              <h1 class="font-extrabold text-3xl">1.5 M</h1>
              <p class="text-sm">Number of Transactions</p>
          </div>
          <div class="flex flex-col items-center gap-3">
              <Icon name="mdi:handshake" size="40" class="text-green-600"/>
              <h1 class="font-extrabold text-3xl">31.9 M</h1>
              <p class="text-sm">Customers Served</p>
          </div>
          <div class="flex flex-col items-center gap-3">
              <Icon name="mdi:handshake" size="40" class="text-green-600"/>
              <h1 class="font-extrabold text-3xl">64</h1>
              <p class="text-sm">Districts Covered</p>
          </div>
      </section>

      <!-- Keep Things Simple -->
      <section class="bg-gray-100 py-20 md:px-20">
          <p class="text-center mb-5 font-black text-3xl">Keep Things Simple</p>
          <p class="text-center text-sm uppercase mb-10">choose out tool</p>
          <div class="flex flex-col gap-8 md:gap-0 md:mx-20 md:flex-row">
              <div class="flex flex-col items-center  bg-white mx-10 rounded-lg shadow-2xl py-8 md:px-10">
                  <h1>POS Terminal</h1>
                  <hr>
                  <img src="/pos.png" alt="">
                  <p class="text-center px-5 text-sm py-10">A simple registration allows you to access PayWell services through the Point of Sale (POS) Terminals. From anywhere.</p>
                  <a href="#" class="bg-green-600 text-white py-2 px-5">Interested?</a>
              </div>
              <div class="flex flex-col items-center bg-green-600 mx-10 rounded-lg shadow-2xl py-8 md:px-10">
                  <h1 class="text-white">Android App</h1>
                  <hr>
                  <img class="w-[144px]" src="/app.png" alt="">
                  <p class="text-center text-white px-5 text-sm py-10">A simple registration allows you to access PayWell services through the Point of Sale (POS) Terminals. From anywhere.</p>
                  <a href="#" class="bg-white text-green-600 py-2 px-5">Interested?</a>
              </div>
              <div class="flex flex-col items-center bg-white mx-10 rounded-lg shadow-2xl py-8 md:px-10">
                  <h1>POS Terminal</h1>
                  <hr>
                  <img src="/laptop.png" alt="">
                  <p class="text-center px-5 text-sm py-10">A simple registration allows you to access PayWell services through the Point of Sale (POS) Terminals. From anywhere.</p>
                  <a href="#" class="bg-green-600 text-white py-2 px-5">Interested?</a>
              </div>
          </div>
      </section>
      
      <!-- Map -->
      <Map />

      <!-- Get In Touch -->
      <Contact />

    </MainLayout>
</template>

<script setup>
import MainLayout from '~/layouts/MainLayout.vue';
</script>