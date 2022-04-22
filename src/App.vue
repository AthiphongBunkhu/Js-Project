<template>
  <section>
    <div class="topnav">
      <router-link to="/user-login" class="active">SIGN IN</router-link>
      <a href="#about">SIGN UP</a>
      <a href="#contact">DORM BOOKING</a>
      <a href="#news">ABOUT</a>
       <router-link to="/">HOME</router-link>
      <img src="logo.png" />
    </div>
  </section>
  <router-view></router-view>
  
</template>

<script>
export default {
  name: "app",

};
</script>

<style>
body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}

.topnav {
  overflow: hidden;
  background-color: #f3e3d3;
}

.topnav a {
  float: right;
  color: #462419;
  text-align: center;
  padding: 64px 66px;
  text-decoration: none;
  font-size: 22px;
}

.topnav b.le {
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 34px 36px;
  text-decoration: none;
  font-size: 17px;
  margin-left: 70px;
}

.topnav a:hover {
  background-color: #efcead;
  color: black;
}

.topnav a.active {
  background-color: #efcead;
  color: #462419;
}
</style>
