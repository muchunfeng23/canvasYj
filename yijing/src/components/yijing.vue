<template>
  <div>
    <div>
      <input type="text" v-model="inputValue"/>
      <button type="button" v-on:click="changeGua">Click me</button>
    </div>
    <canvas id="myCanvas" width="400" height="300"></canvas>
    <table class="gridtable">
      <tr>
        <th>卦名</th>
        <th>自然象征</th>
        <th>性情</th>
        <th>家族关系</th>
        <th>先天八卦方位</th>
        <th>后天八卦方位</th>
        <th>五行</th>
      </tr>
      <tr>
        <td v-for="aValue in shangGua">
          {{aValue}}
        </td>
      </tr>
      <tr>
        <td v-for="aValue in xiaGua">
          {{aValue}}
        </td>
      </tr>
    </table>

  </div>
</template>
<script>
  export default {
    name: 'YJ',
    data () {
      return {
        inputValue:13,
        msg: 'Welcome to Your Vue.js App',
        bagua:{
          "000":"坤",
          "001":"震",
          "010":"坎",
          "011":"兑",
          "100":"艮",
          "101":"离",
          "110":"巽",
          "111":"乾"
        },
        baguaTitle:["卦名","自然象征","性情","家族关系","先天八卦方位","后天八卦方位","五形"],
        baguaDesc:{
          "000":"坤，地，顺，母，北，西南，土",
          "001":"震，雷，动，长男，东北，东，木",
          "010":"坎，水，陷，中男，西，北，水",
          "011":"兑，泽，悦，少女，东南，西，金",
          "100":"艮，山，止，少男，西北，东北，土",
          "101":"离，火，丽，中女，东，南，火",
          "110":"巽，风，入，长女，西南，东南，木",
          "111":"乾，天，健，父，南，西北，金"
        },
        shangGua:["坤","地","顺","母","北","西南","土"],
        xiaGua:["震，雷，动，长男，东北，东，木"],
      }
    },
    methods:{
      changeGua(){
        let bagua = {
          "000":"坤",
          "001":"震",
          "010":"坎",
          "011":"兑",
          "100":"艮",
          "101":"离",
          "110":"巽",
          "111":"乾"
        }
        let baguaTitle = ["卦名","自然象征","性情","家族关系","先天八卦方位","后天八卦方位","五形"]
        let baguaDesc = {
          "000":"坤，地，顺，母，北，西南，土",
          "001":"震，雷，动，长男，东北，东，木",
          "010":"坎，水，陷，中男，西，北，水",
          "011":"兑，泽，悦，少女，东南，西，金",
          "100":"艮，山，止，少男，西北，东北，土",
          "101":"离，火，丽，中女，东，南，火",
          "110":"巽，风，入，长女，西南，东南，木",
          "111":"乾，天，健，父，南，西北，金"
        }
        let c=document.getElementById("myCanvas");
        let cxt=c.getContext("2d");
        cxt.fillStyle = "#FFF"
        cxt.fillRect(0,0,800,400)
        let num = this.inputValue

        var yiwei = 0
        var startX1 = 10
        var startY1 = 10

        var shangGua = "";
        var xiaGua = "";
        while(yiwei < 6){
          var yinOrYang = num & 0x0001
          num = num >> 1

          if(yinOrYang == 0){
            if(yiwei < 3){
              this.yin(cxt,startX1,startY1)
            }else{
              this.yin(cxt,startX1,startY1 + 10)
            }
          }else{
            if(yiwei < 3){
              this.yang(cxt,startX1,startY1)
            }else{
              this.yang(cxt,startX1,startY1 + 10)
            }
          }
          if(yiwei < 3){
            shangGua += yinOrYang
          }else{
            xiaGua += yinOrYang
          }
          yiwei++
          startY1 += 45
        }
        this.shangGua = baguaDesc[shangGua].split("，")
        this.xiaGua = baguaDesc[xiaGua].split("，")

        var mainStartX = 250
        var mainStartY = 50
        cxt.font = "bold 68px 楷体"
        cxt.textAlign = "left"
        cxt.textBaseline = "top"
        cxt.fillStyle = "#000"
        cxt.fillText("上"+bagua[shangGua],mainStartX,mainStartY);
        cxt.fillText("下"+bagua[xiaGua],mainStartX,mainStartY + 110)
      },
      yin(cxt,startX,startY){
        cxt.fillStyle="#000000";
        cxt.fillRect(startX,startY,90,35);
        cxt.fillRect(startX + 110,startY,90,35);
      },

      yang(cxt,startX,startY){
        cxt.fillStyle="#000000";
        cxt.fillRect(startX,startY,200,35);
      }
    },
    mounted:function () {
      this.changeGua()
    }
  }
</script>
<!-- CSS goes in the document HEAD or added to your external stylesheet -->
<style type="text/css">
  table.gridtable {
    font-family: verdana,arial,sans-serif;
    font-size:11px;
    color:#333333;
    border-width: 1px;
    border-color: #666666;
    border-collapse: collapse;
  }
  table.gridtable th {
    border-width: 1px;
    padding: 8px;
    border-style: solid;
    border-color: #666666;
    background-color: #dedede;
  }
  table.gridtable td {
    border-width: 1px;
    padding: 8px;
    border-style: solid;
    border-color: #666666;
    background-color: #ffffff;
  }
</style>

