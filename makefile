PP = cssg
FLAGS = -m pandoc

index: src/index.txt
	$(PP) $(FLAGS) $^ -o dist/$@.html

portfolio: src/portfolio.txt
	$(PP) $(FLAGS) $^ -o dist/$@.html

move:
	cp -r src/storage dist/; cp -r src/style dist/
	

all: index portfolio move

clean: 
	rm dist/*.html; rm -r dist/*
