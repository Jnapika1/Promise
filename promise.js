const blogs =[];

function createBlog() {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            blogs.push({title: 'BLOG1'});
            resolve();
        }, 3000)
    }) 
}

function create2ndBlog() {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            blogs.push({title: 'BLOG2'});
            resolve()
        }, 2000)
    }) 
}


function deleteBlog(){
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            if(blogs.length > 0){
                const poppedElement  = blogs.pop();
                resolve(poppedElement);
            } else {
                reject("ERROR")
            }
        }, 1000)
    })
}

function updateLastUserActivityTime(){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(new Date().getTime());
        }, 1000);
    })
}
//console.log(`Before creation`)

updateLastUserActivityTime().then((msg)=>{
    console.log(`Before creation ${msg}`);
});

// create1stBlog().then(()=>{ 
//     updateLastUserActivityTime().then((msg)=>{
//         console.log(`after creation ${msg}`);
//     })
// })

const p1=createBlog();
const p2=updateLastUserActivityTime();

async function fun1(){
await Promise.all([p1, p2])
    let res = new Promise((resolve, reject)=>{
        blogs.forEach((index)=>{
            console.log(`After Creation ${index.title}`);
            updateLastUserActivityTime().then(msg=>{
                console.log(msg);
            })
        })
        resolve();    
    })
    await res;

    let del = await deleteBlog()
        console.log(`${del.title} deleted`);
    
}
fun1();

// create1stBlog().then(()=>{
//     create2ndBlog().then(()=>{
//         deleteBlog().then((msg)=>{
//             console.log(msg.title);
//             deleteBlog().then((msg)=>{
//                 console.log(msg.title);
//                 deleteBlog().then((msg)=>{
//                     console.log(msg.title);
//                 }).catch((err)=>{console.log(err);})
//             }).catch((err)=>{console.log(err);})
//         }).catch((err)=>{console.log(err);})
//     })
// })