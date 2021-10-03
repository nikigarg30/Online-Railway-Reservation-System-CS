package com.example.ticket_booking_service.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.ticket_booking_service.models.BookTickets;

public interface TicketRepository extends MongoRepository<BookTickets, String> {

}