package com.example.train_info_service;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import com.example.train_info_service.models.Train;
import com.example.train_info_service.repositories.TrainRepository;
import com.example.train_info_service.service.TrainService;

import java.util.stream.Collectors;
import java.util.stream.Stream;

@SpringBootTest
class TrainInfoServiceApplicationTests {
	
	@Autowired
	private TrainService trainService;
	
	@MockBean
	private TrainRepository trainRepository;

	@Test
	public void getTrainTest()
	{
		when(trainRepository.findAll()).thenReturn(Stream
				        .of(new Train(),
						new Train(),
						new Train(),
						new Train())
				        .collect(Collectors.toList()));
		assertEquals(4,trainService.getContact().size());
	}
	
	@Test
	public void saveTrainTest() 
	{
		Train train = new Train();
		when(trainRepository.save(train)).thenReturn(train);
		assertEquals(train, trainService.addTrain(train));
	
	}
	
	@Test
	public void deleteUserTest() 
	{
		Train train = new Train();
		trainService.deleteTrain(train);
		verify(trainRepository, times(1)).delete(train);
	}
}
