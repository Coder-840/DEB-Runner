async function upload(){

const file = document.getElementById("debFile").files[0]

const data = new FormData()

data.append("deb", file)

await fetch("/upload",{
method:"POST",
body:data
})

alert("Installed")
}

async function run(){

const command = document.getElementById("cmd").value

await fetch("/run",{
method:"POST",
headers:{ "Content-Type":"application/json" },
body:JSON.stringify({command})
})

}
