<template>
  <div class="home">
    <el-container direction='vertical' class="header">
        <Header></Header>
        <el-container direction='horizontal' class="content">
            <Aside></Aside>
            <Main class="main">aaa </Main>
        </el-container>
    </el-container>
  </div>
</template>

<script>
import Aside from '../components/Aside';
import Header from '../components/Header';
import Main from '../components/Main';

export default {
  name: 'Home',
  components: {
    Aside,
    Header,
    Main,
  },
};
</script>
<style scoped>
.header{
    height: 60px;
    top: 0px;
}
.content{
    position:fixed;
    top: 60px;
    bottom: 0px;
    right: 0px;
    left: 0px;
}
.main{
    height: 100%;
    position: fixed;
    left: 200px;
    right: 0px;
}
</style>
