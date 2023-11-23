#!/bin/bash

# Check if the message count and sleep time are provided as command-line arguments
if [ $# -lt 2 ]; then
    echo "Usage: $0 <message_count> <sleep_time>"
    exit 1
fi

# MQTT broker details
MQTT_BROKER_HOST="localhost"
MQTT_BROKER_PORT="1883"
MQTT_TOPIC="BRN/BLI"

# Read the message count and sleep time from command-line arguments
MESSAGE_COUNT=$1
SLEEP_TIME=$2

# Function to generate a random number in a given range
generate_random() {
    shuf -i $1-$2 -n 1
}

# Loop to publish messages
for ((i=1; i<=$MESSAGE_COUNT; i++)); do
    # Generate random values for temperature, humidity, and battery voltage
    Val1=$(generate_random 1000 1100)
    Val2=$(generate_random 300 400)
    Val3=$(generate_random 700 800)
    Val4=$(generate_random 700 800)
    Val5=$(generate_random 0 10)
    Val6=$(generate_random 0 50)
    Val7=$(generate_random 500 800)
    Val8=$(generate_random 200 250)
    Val9=$(generate_random 200 250)
    Val10=$(generate_random 200 250)
    Val11=$(generate_random 0 10)

    # Create the message payload

    MESSAGE="{\"BRN/BLI/BLIW$Val11/elec/solar/solar/i_avg\": $Val1,
               \"BRN/BLI/BLIW$Val11/elec/solar/solar/v_avg\": $Val2,
               \"BRN/BLI/BLIW$Val11/elec/solar/solar/P\": $Val3,
               \"BRN/BLI/BLIW$Val11/elec/solar/solar/pf\": $Val4,
               \"BRN/BLI/BLIW$Val11/elec/solar/solar/ap_total\": $Val5,
               \"BRN/BLI/BLIW$Val11/elec/solar/solar/f\": $Val6,
               \"BRN/BLI/BLIW$Val11/elec/solar/solar/E\": $Val7,
               \"BRN/BLI/BLIW$Val11/elec/solar/solar/vA_rms\": $Val8,
               \"BRN/BLI/BLIW$Val11/elec/solar/solar/vB_rms\": $Val9,
               \"BRN/BLI/BLIW$Val11/elec/solar/solar/vC_rms\": $Val10
             }"

    # Publish the message using mosquitto_pub
    docker exec mosquitto mosquitto_pub -h $MQTT_BROKER_HOST -p $MQTT_BROKER_PORT -t $MQTT_TOPIC -m "$MESSAGE"

    echo "Published message $i of $MESSAGE_COUNT"

    # Sleep for the specified duration
    sleep $SLEEP_TIME
done
