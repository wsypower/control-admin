<template>
  <div class="logo">
    <header>
      <div aria-busy="true" aria-label="Loading, please wait." role="progressbar"></div>
    </header>
    <main role="main"></main>
  </div>
</template>

<script>
export default {
  name: 'logo'
}
</script>

<style lang="scss" scoped>
.logo {
  width: 100%;
  height: 100%;
  @function colour($value) {
    @return map-get($colours, $value);
  }

  // Variables
  $preloader-height: 8px;

  $colours: (
    green: #159756,
    red: #da4733,
    blue: #3b78e7,
    yellow: #fdba2c
  );

  $animation-duration: 3.5s;
  // 发光条
  header [role='progressbar'][aria-busy='true'] {
    position: absolute;
    top: 60;
    left: 0;
    padding-top: $preloader-height;
    width: 100%;
    background-color: colour(green);
    animation: preloader-background linear $animation-duration infinite;

    &::before,
    &::after {
      display: block;
      position: absolute;
      top: 0;
      z-index: 2;
      width: 0;
      height: $preloader-height;
      background: #afa;
      animation: preloader-front linear $animation-duration infinite;
      content: '';
    }

    &::before {
      right: 50%;
    }

    &::after {
      left: 50%;
    }
  }

  // Animations
  @keyframes preloader-background {
    0%,
    24.9% {
      background-color: colour(green);
    }

    25%,
    49.9% {
      background-color: colour(red);
    }

    50%,
    74.9% {
      background-color: colour(blue);
    }

    75%,
    100% {
      background-color: colour(yellow);
    }
  }

  @keyframes preloader-front {
    0% {
      width: 0;
      background-color: colour(red);
    }

    24.9% {
      width: 50%;
      background-color: colour(red);
    }

    25% {
      width: 0;
      background-color: colour(blue);
    }

    49.9% {
      width: 50%;
      background-color: colour(blue);
    }

    50% {
      width: 0;
      background-color: colour(yellow);
    }

    74.9% {
      width: 50%;
      background-color: colour(yellow);
    }

    75% {
      width: 0%;
      background-color: colour(green);
    }

    100% {
      width: 50%;
      background-color: colour(green);
    }
  }

  // Unimportant bits
  * {
    box-sizing: border-box;
  }

  html,
  body {
    margin: 0;
    padding: 0;
    height: 100%;
  }

  body {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: Avenir Next, Helvetica Neue, Helvetica, Arial, sans-serif;
    background-color: #f5f5f5;
  }

  header {
    position: relative;
    width: 100%;
    height: 60px;
  }

  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    flex-grow: 1;
    text-align: center;

    :root & > * + * {
      margin-top: 1em;
    }
  }

  h1 {
    margin: 0;
    font-size: 2.2em;
    font-weight: 200;
  }

  p {
    margin: 0;
    font-size: 0.875em;
    font-weight: 400;
  }
}
</style>