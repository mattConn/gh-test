PP = cssg
FLAGS = -m pandoc

index: src/index.txt
	$(PP) $(FLAGS) $^ > dist/$@.html

portfolio: src/portfolio.txt
	$(PP) $(FLAGS) $^ > dist/$@.html

all: index portfolio

clean: 
	rm dist/*.html
