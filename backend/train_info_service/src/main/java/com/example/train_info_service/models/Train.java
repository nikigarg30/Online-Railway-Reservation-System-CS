package com.example.train_info_service.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Document(collection = "trainsDetails")
public class Train {
	
	@Id
	private String trainid;
	@Field
	private String trainName;
	@Field
	private String startStation;
	@Field
	private String endStation;
	@Field
	private int no_of_seats;
	@Field
	private int duration;
	@Field
	private String departure;
	@Field
	private String date;
	@Field
	private int fare;
	
public Train() {}

public Train(String trainid, String trainName, String startStation, String endStation, int no_of_seats, int duration, String departure, String date, int fare) {
	super();
	this.trainid = trainid;
	this.trainName = trainName;
	this.startStation = startStation;
	this.endStation = endStation;
	this.no_of_seats = no_of_seats;
	this.duration = duration;
	this.departure = departure;
	this.date = date;
	this.fare = fare;
}

public String getTrainid() {
	return trainid;
}

public void setTrainid(String trainid2) {
	this.trainid = trainid2;
}

public String getTrainName() {
	return trainName;
}

public void setTrainName(String trainName) {
	this.trainName = trainName;
}

public String getStartStation() {
	return startStation;
}

public void setStartStation(String startStation) {
	this.startStation = startStation;
}

public String getEndStation() {
	return endStation;
}

public void setEndStation(String endStation) {
	this.endStation = endStation;
}

public int getNo_of_seats() {
	return no_of_seats;
}

public void setNo_of_seats(int no_of_seats) {
	this.no_of_seats = no_of_seats;
}

public int getDuration() {
	return duration;
}

public void setDuration(int duration) {
	this.duration = duration;
}

public String getDeparture() {
	return departure;
}

public void setDeparture(String departure) {
	this.departure = departure;
}

public String getDate() {
	return date;
}

public void setDate(String date) {
	this.date = date;
}

public int getFare() {
	return fare;
}

public void setFare(int fare) {
	this.fare = fare;
}

@Override
public String toString() {
	return String.format("Train[trainid = '%s', trainName = '%s', startStation = '%s',"
			+ " endStation = '%s', no_of_seats = '%s', duration = '%s', departure = '%s', date = '%s', fare = '%s']",
			trainid, trainName, startStation, endStation, no_of_seats, duration, departure, date, fare);
}
}