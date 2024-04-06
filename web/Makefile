.PHONY = all include css clean

all: clean include css

include:
	mkdir -p build
	cp -R src/* build
	python3 utils/include.py

css: include
	for file in $(wildcard build/css/*.scss); do \
		sassc --style expanded "$$file" "$${file%.scss}".css; \
	done

clean:
	rm -rf build/*

install_ubuntu_build_deps:
	sudo apt install sassc
