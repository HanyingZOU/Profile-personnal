
<head>
	<title>Welcome</title>
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css">
</head>

<body>
	
	<div class="content" >
		<div class="name"><p>I AM HANYING</p></div>
		<div class="btn"><a href="/main"><p>Learn More</p></a></div>
	</div>
</body>


<style>
	*{
		margin:0px;
		padding:0px;
		}
	div{
		width:100%;
		margin:auto;	
		}
	.content{
		height: 800px;
		width: 100%;
		background-image: url("https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/e85269109089199.Y3JvcCw4MDEsNjI2LDI5OSwxNTI.jpg");
		background-repeat: no-repeat;
		background-size: 100%;
	}
	.name{
		width: 700px;
		height: 100px;
		position: relative;
		top: 90px;

	}
	.name p{
		font-size: 80px;
		font-family: cursive ;
		line-height:90px;
		font-weight:bold;
		color: #1B2754;
	}
	.btn{
		border-radius: 15px;
		width: 200px;
		height: 70px;
		background-color: #D994AB;
		position: relative;
		top: 170px;
		left: -200px;
	}
	.btn a{
		text-decoration: none;
	}
	.btn p{
		font-size: 25px;
		font-family: cursive;
		line-height:70px;
		text-align:center;
		font-weight:bold;
		color:#FEEFE1;
	}
	.btn p:hover{
					animation: moveone 1s infinite;
					-webkit-animation: moveone 1s infinite;
					-webkit-animation-fill-mode: forwards;
				}
				@keyframes moveone{
					0%{color: #FEEFE1;}
					50%{color:#1B2754;}
					100%{color: #FEEFE1;}
	}

</style>