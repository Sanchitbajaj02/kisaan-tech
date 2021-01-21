# TSE-Coders

### Team Members:- 
- Sanchit
- Anish
- Vaibhav
- Lakshit
- Ankit

## Automatic plant watering system
- Abstract 
We have chosen this project as India is an agriculture oriented country and the rate at which water resources are depleting is a dangerous threat hence there is a need of smart and efficient way of irrigation, which detect the humidity in the soil (agricultural field) and supply water  to the field which has water requirement. The project is ARDUINO UNO micro-controller based design which controls the water supply in the field to be irrigated.
There sensors present in each field, are not activated till water is present on the field. Once the field gets dry sensors sense the requirements of the water in the field and send a signal to the micro-controller. The Micro-controller then supply water to that particular field which has water requirement till the sensors is deactivated again. In case, when there are more than one signal for water requirement then the micro-controller will prioritize the first received signal and irrigate the fields accordingly  

- Introduction  
In present days, in the field of agriculture, farmers are facing major problems in watering their crops. It’s because they don’t have proper idea about the availability of the water in the ground, even if it is available. They need to pump water and wait until the whole field is watered during which one part of the field may get more watered and the other part might get less watered. They also have  to stop doing other activities which are also important for them to water the field, and thus they loose their precious time and efforts.  

This device can also be used for Greenhouse farming. Healthy plants can transpire a lots of water, resulting in an increase in the humidity of the Greenhouse air. A high relative humidity (above 80-85%) should be avoided because it can increase the incidence of the disease and plant transpiration. Sufficient venting or successive heating and venting can prevent condensation on plants surfaces and greenhouse structure. The use of cooling systems during the warmer summer months increase the greenhouse air humidity. During periods with warm and humid outdoors conditions, humidity control inside the greenhouse can be a challenge. This automatic irrigation system senses the moisture content in air as well as in soil and automatically switches the pump or any other machine to maintain the moisture in soil as well as in air . 
Circuit Diagram and working  

The circuit diagram consists of a micro-controller unit that is Arduino UNO micro-controller, One soil moisture sensor which is used to sense the moisture in soil , one DHT sensor which is used to measure the temperature and humidity of surrounding air , two 5V relays, one power bank with charging module, one water pump and a cooling or heating system. 
First we program the micro-controller and set the values of soil moisture and air humidity and temperature. Now the soil moisture sensor and DHT sensor sends the real time values of humidity and temperature of soil and it’s surrounding. If the values of humidity and temperature send by both the sensor is greater than the preset threshold value , then the micro-controller will send a signal to relays to turn on the pump or cooling/heating system. If the sensor values  of moisture or humidity is low than the threshold value, it will turn off the pump or cooling/heating system. 
Microcontroller and sensors used in this project  

1.	ARDUINO UNO micro-controller  
The Arduino UNO is a small, complete and bread board friendly micro-controller based on the     
ATmega328 and works with a mini-B USB cable instead of a standard one. 
It’s operating voltage is 5v-12v. DC 
It has a flash memory of 32KB of which 2KB used by boot loader  
It has clock speed of 16 MHz 
It has 8 Analog IN Pins and 22 Digital I/O Pins ( 6 of which are PWM) 

2.	Soil Moisture Sensor 
Soil moisture sensor is an electronic device used to measure the content of moisture inside the soil surface  
It’s operating voltage is 3.7V-5V DC 
It has two LEDs one indicates the output and another one indicates the power 
It has one Digital output Pin and one Analog output Pin and rest two are for input voltage (VCC) and another is for ground (GND) 

3.	Relay Module 
1-channel 5v relay module is a relay interface board, it can be controlled directly by a wide range of microcontroller such as Arduino, AVR, PIC, ARM and so on. To control a relay  we have to send an input signal of 5v. 
It is a compact 5-Pin configuration a with plastic moulding  

4.	Water Pump 
The water pump is used to artificially supply water for a particular task. It can be electronically controlled by interfacing it to a microcontroller. It can be triggered on/ off by sending signals required. 

5.DHT sensor 
DHT sensor is an electronic device used to measure humidity as well as temperature of the surrounding. The DHT sensor is made of two parts, a capacitive humidity sensor and a thermistor. There is also a very basic chip inside that does some analog to digital conversion and spits out a digital signal with temperature and humidity. It’s operating voltage is 3.7v 

- Conclusion  
Thus the Automatic Plant Watering System has been designed and tested successfully. It has been developed by integrated features of all the hardware components used. Presence of every module has been reasoned out and placed carefully, thus contributing the best working of the unit. The system has been tested to function automatically. 

# Youtube Video Link: <a href="https://youtu.be/ZB9nt0AwuCA">Click Here</a>
