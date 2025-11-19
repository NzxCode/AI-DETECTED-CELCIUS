function hitungLoss(epoch) {
    return (1/ (epoch + 1)).toFixed(4);
}

function hitungAkurasi(epoch) {
    return(80 + (epoch * 2)) + "%";
}

function startSystemMonitor() {
    const monitorid = setInterval(() => {
        const gpuTemp = Math.floor(Math.random() * (85 - 60) + 60);
        console.log(`GPU Temperatures : ${gpuTemp}Celcius`);
    }, 1000);
    return monitorid;
}

function mulaiTrainingAI() {
    console.log("INIZALIZING AI PROTOCOL TO AI MODEL TRANING... HERE WE GO!");
    const monitor = startSystemMonitor();

    setTimeout(() => {
        console.log("\n STEP 1 : DATASET LOADED (MNIST.csv)");

        setTimeout(() => {
            console.log("\n STEP 2 : DATA NORMALIZED & TOKENIZED!");

            setTimeout(() => {
                let loss = hitungLoss(1);
                let akurasi = hitungAkurasi(1);
                console.log(`\n STEP 3 : Epoch 1 Completed! | Loss : ${loss} | Acc : ${akurasi}`);

                setTimeout(() => {
                    let loss = hitungLoss(2);
                    let akurasi = hitungAkurasi(2);
                    console.log(`\n STEP 4 : Epoch 2 Completed! | Loss : ${loss} | Acc : ${akurasi}`);

                    setTimeout(() => {
                        console.log("\n STEP 5 : Model saved to 'my_ai_model.h5'");
                        console.log("TRAINING FINISHED! SHUTTING DOWN YOUR SERVER...");
                        clearInterval(monitor);
                    }, 2000);
                }, 3000);
            }, 3000);
        }, 2000);
    }, 2000);
}

mulaiTrainingAI();