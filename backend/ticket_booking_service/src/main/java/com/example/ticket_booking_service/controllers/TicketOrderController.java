package com.example.ticket_booking_service.controllers;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.ticket_booking_service.models.BookTickets;
import com.example.ticket_booking_service.repositories.TicketRepository;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/orders")
public class TicketOrderController {
	
	private TicketRepository ticketRepository;
	
	@Autowired
	public TicketOrderController (TicketRepository ticketRepository) {
		this.ticketRepository = ticketRepository;
	}
	
	@GetMapping("/{id}")
	public Optional<BookTickets> getBook(@PathVariable String id){
		return ticketRepository.findById(id);
	}

	@PostMapping("/addOrder")
	public String saveBook(@RequestBody BookTickets book) {
	ticketRepository.save(book);
	return "Booked ticket with id :  " + book.getId();
    }
	
	@PutMapping("/update/{id}")
	public BookTickets updateOrder(@PathVariable("id") String id,@RequestBody BookTickets order ) {
		order.setId(id);
		ticketRepository.save(order);
		return order;
	}
		
	 @DeleteMapping("/del/{id}")
	 public String deleteOrder (@PathVariable String id) {
		 ticketRepository.deleteById(id);
		return "Order deleted with id : "+id;
		}
	}