PP = cssg
FLAGS = -m pandoc

index: src/index.txt
	$(PP) $(FLAGS) $^ > dist/$@.html

portfolio: src/portfolio.txt
	$(PP) $(FLAGS) $^ > dist/$@.html

move:
	cp -r storage dist/
	

all: index portfolio move

clean: 
	rm dist/*.html; rm -r dist/*
