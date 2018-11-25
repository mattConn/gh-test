# resume makefile to make pdf and html versions

RESUME = resume-2018

$(RESUME).pdf : $(RESUME).tex
	pdflatex $^

$(RESUME).html : $(RESUME).pdf
	pdf2htmlEX $^

all: $(RESUME).pdf $(RESUME).html

clean:
	rm $(RESUME).pdf; rm $(RESUME).html;
