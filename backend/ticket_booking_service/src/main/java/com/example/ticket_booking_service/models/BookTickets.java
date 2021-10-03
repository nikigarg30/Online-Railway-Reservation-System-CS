package com.example.ticket_booking_service.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Document(collection = "tickets")
public class BookTickets 
{
	@Id
	private String id;
	@Field
	private String source;
	@Field
	private String destination;
	@Field
	private int no_of_tickets;
	
	public BookTickets() {}
	
	public BookTickets(String id, String source, String destination, int no_of_tickets) {
		super();
		//this.id = id;
		this.source = source;
		this.destination = destination;
		this.no_of_tickets = no_of_tickets;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getSource() {
		return source;
	}

	public void setSource(String source) {
		this.source = source;
	}

	public String getDestination() {
		return destination;
	}

	public void setDestination(String destination) {
		this.destination = destination;
	}

	public int getNo_of_tickets() {
		return no_of_tickets;
	}

	public void setNo_of_tickets(int no_of_tickets) {
		this.no_of_tickets = no_of_tickets;
	}

	@Override
	public String toString() {
		return String.format("Ticket[id = '%s', source = '%s', destination = '%s', no_of_tickets = '%s']",
				id, source, destination, no_of_tickets) ;
	}
}