# first
just demo 
使用flex布局

其中分两部分

<body class="HolyGrail">
  <header>...</header>
  <div class="HolyGrail-body">
    <main class="HolyGrail-content">...</main>
    <nav class="HolyGrail-nav">...</nav>
    <aside class="HolyGrail-ads">...</aside>
  </div>
  <footer>...</footer>
</body>

样式为
.HolyGrail {
  display: flex;
  min-height: 100vh;
  flex-direction: column;

}

header,
footer {
  flex: 0 0 5em;  /*竖直方向的长度变化  第三个参数*/
  background-color: red;
}
