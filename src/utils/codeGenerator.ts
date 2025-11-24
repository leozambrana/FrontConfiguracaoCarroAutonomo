export const generateArduinoCode = (delayViragemMs: number, temposLado: number[]): string => {
  return `#include <AFMotor.h>
#include <Servo.h>

Servo servoPorta;

AF_DCMotor motor1(1);
AF_DCMotor motor2(2);
AF_DCMotor motor3(3);
AF_DCMotor motor4(4);

void pararMotores() {
  motor1.run(RELEASE);
  motor2.run(RELEASE);
  motor3.run(RELEASE);
  motor4.run(RELEASE);
}

void virarDireita(int delayCurva) {
  motor1.run(RELEASE); 
  motor4.run(RELEASE); 
  motor2.run(BACKWARD); 
  motor3.run(FORWARD);
  
  //710 é o delay perfeito para fazer 90 graus com bateria cheia
  //este valor de 710 é valido somente quando sem o peso da areia

  delay(delayCurva); // calibrar
  pararMotores();
  delay(500);
}

void avancarComMarcacao(long tempoAvanco_ms) {
  servoPorta.write(0);
  delay(300); 

  motor1.run(BACKWARD);
  motor2.run(BACKWARD);
  motor3.run(FORWARD);
  motor4.run(FORWARD);
  
  delay(tempoAvanco_ms);

  pararMotores();
  delay(300);

  servoPorta.write(75);
  delay(500);
}

void setup() {
  motor1.setSpeed(200);
  motor2.setSpeed(200);
  motor3.setSpeed(200);
  motor4.setSpeed(200);

  servoPorta.attach(10);
  servoPorta.write(75);
  delay(5000);
}

void loop() {
  long tempoLado = 0;

  for (int i = 0; i < 4; i++) {

    tempoLado = ${temposLado[0]};
    if(i == 1 || i == 3) {
      tempoLado = ${temposLado[1]};
    }
    avancarComMarcacao(tempoLado);

    servoPorta.write(75); 
    delay(700);

    if (i < 3) {
      if(i == 1 ){
        virarDireita(${Math.round(delayViragemMs * 0.952)});
      } else {
        virarDireita(${Math.round(delayViragemMs * 1)});
      }
      delay(300);
      servoPorta.write(75);
    }
  }

  while (true);
}`;
};
