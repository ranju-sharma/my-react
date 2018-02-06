<script type="text/javascript">
  var info = [
    {
      name:'ranju',
      age:27
    },
    {
      name:'sanju',
      age:28
    }
  ]
  var myinfo='';
  for (i=0; i<info.length; i++) {
     myinfo = (info[i].name + ' '  + info[i].age + '<br />');
     console.log(myinfo);
     document.getElementById("info_wrap").innerHTML+=(myinfo);
  }
</script>
