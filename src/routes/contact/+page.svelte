<script>
  import { supabase } from '$lib/supabaseClient'
  import { onMount } from 'svelte'

  let name = ''
  let telephone = ''
  let mail = ''
  let message = ''

  let selected = null

  let reasons = []
    onMount(async () => {
      const { data, error } = await supabase
        .from('thereasons')
        .select('contactreason,id')
      reasons = data
      console.log(reasons)

    })

	const handleClick = async () => {

    const { data, error } = await supabase
      .from('contact')
      .insert([
        { name: name, telephone: telephone, mail: mail, message:message, reason: selected },
      ])

  }
  

</script>


<head>
  <title>Contact me</title>
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css">
</head>
<body>
  <nav class="nav">
    <div class="navtitle">
			<strong>Hanying ZOU</strong>'s Profile
    </div>
    <a href="/main"><div class="nav1"><p>Home</p></div></a>
    <a href="/main/#about"><div class="nav2"><p>About</p></div></a>
    <a href="/main/#skill"><div class="nav3"><p>Skill</p></div></a>
    <a href="#"><div class="nav4"><p>Contact</p></div></a>
  </nav>

  <div class="contact">
    <div class="left">
      <div>
        <label for="name">Name</label>
        <input type="text" id="name" name="name" placeholder="Your name.." bind:value={name}>

        <label for="telephone">Phone Number</label>
        <input type="text" id="telephone" name="phonenumber" placeholder="(Optional) Your phone number.." bind:value={telephone}>
        
        <label for="mail">Email</label>
        <input type="text" id="mail" name="mailadress" placeholder="Your e-mail adress.." bind:value={mail}>

        <label for="reason">Contact me for...</label>
        <select bind:value={selected}>
          {#each reasons as reason}
            <option value={reason.id}>
              {reason.contactreason}
            </option>
          {/each}
        </select>

        <label for="message">Message</label>
        <input type="text" id="message" name="message" placeholder="Leave me a message" bind:value={message}>

        <button disabled={!name||!message||!mail||!selected} on:click={handleClick}>Submit</button>
      </div>
    </div>
    <div class="right">
    </div>
  </div>

</body>
<footer>
  <p>Like what you see?</p>
  <h1>Then leave me a message and we'll chat through what you need.</h1>
  <h1>Or you can follow me...</h1>
  <ul class="icon">
    <li>
      <a href="https://www.facebook.com/hanying.zou.75/" target="_blank">
        <i class="fab fa-facebook"></i>
      </a>
    </li>
    <li>
      <a href="https://weibo.com/u/7295206273" target="_blank">
        <i class="fab fa-weibo"></i>
      </a>
    </li>
    <li>
      <a href="https://www.linkedin.com/in/hanying-zou-364445210/" target="_blank">
        <i class="fab fa-linkedin"></i>
      </a>
    </li>
  </ul>
</footer>

<style>
  body{
    min-height: 120%;
  }
  .nav{
    height: 70px;
    background-color: #F8D3DA;
    width:100%;
    opacity: 0.8;
    display: flex;
    justify-self: space-around;
    align-items: center;
    margin: auto;
  }
  .nav p{
    font-size: 25px;
    line-height:65px;
    text-align:center;
    font-weight:bold;
    color:#ffffff;
    margin: auto;
  }
  .navtitle{
    padding-left: 30px;
    color: white;
  }
  .navtitle strong{
    font-size: 50px;
  }
  .nav1 p{
    font-size: 28px;
  }
  .nav1,.nav2,.nav3,.nav4{
    width: 100px;
    height: 60px;
    display: inline-block;
    margin-left:10px;
  }
  .nav1{
    padding-left: 80px;
  }
  .nav p:hover{
          animation: moveone 1s infinite;
          -webkit-animation: moveone 1s infinite;
          -webkit-animation-fill-mode: forwards;
  }
    @keyframes moveone{
      0%{color: #FEEFE1;}
      50%{color:#1B2754;}
      100%{color: #FEEFE1;}
    }
    @-webkit-keyframes moveone{
      0%{color: #FEEFE1;}
      50%{color:#1B2754;}
      100%{color:#FEEFE1;}
    }

  .contact {
	  width: 100%;
	  margin: 10px 0 10px 0;
	  overflow: hidden;
    background-color: #FAECEE;
	}
  .title{
    width: 100%;
    height: 100%;
    margin-left: 15px;
    margin-top: 0;
  }
  .title p{
    font-size: 40px;
    color: #9C69E2;
    line-height: 40px;
    margin-top: 0;
    font-weight: bolder;
  }
	.contact .left {
	  width: 45%;
	  height: 480px;
	  float: left;
    margin-top: 30px;
    margin-left: 20px;
	}
	.contact .right {
	  width: 50%;
	  height: 480px;
	  float: left;
    background-image: url("https://www.lunwentop.net/wp-content/uploads/2022/10/about.png");
	}

  input[type=text], select {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }
  button {
    width: 20%;
    background-color: #9C69E2;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    margin-left: 40%;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  button:hover:enabled {
    background-color: #7F58C2;
  }
  button:disabled{
    background-color:grey;
  }

	footer{
		margin-top: 0px;
		width: 100%;
		height: 100px;
		float: left;
		clear: both;
		margin-bottom: 0px;
		background-color: #F8D3DA;
		opacity: 0.8;
		text-align: center;

	}
	footer p{
    line-height: 10px;
    color: white;
		font-weight: bold;
	}
	footer h1{
		line-height: 8px;
		color: white;
		font-size: 12px;
	}
  .icon{
    margin-top: 0;
    list-style: none;
    align: center;
    padding-left: 45%;
  }
  .icon li{
    float: left;
    margin: 0 10px 0 10px;
  }
</style>