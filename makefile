PP = cssg
FLAGS = -m pandoc
DIST = mattconn.dev

index: src/index.txt
	$(PP) $(FLAGS) $^ -o $(DIST)/$@.html

portfolio: src/portfolio.txt
	$(PP) $(FLAGS) $^ -o $(DIST)/$@.html

move:
	cp -r src/storage $(DIST)/; cp -r src/style $(DIST)/
	

all: index portfolio move

clean: 
	rm $(DIST)/*.html; rm -r $(DIST)/*
