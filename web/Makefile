.PHONY: all include css clean

all: clean include css

include:
	mkdir -p build
	cp -R src/* build
	python3 utils/include.py

css: include
	for file in $(wildcard build/css/*.scss); do \
		sassc --style expanded "$$file" "$${file%.scss}".css; \
	done

dev:
	if [ "`ps | grep python3`" ]; then \
		ps | \
		grep python3 | \
		awk '{print $$1}' | \
		xargs kill -9; \
	fi

	python3 -m http.server -d build &

	while true; do \
		find src | \
		entr -d make; \
		sleep 1; \
	done

clean:
	rm -rf build/*

install_ubuntu_dev_deps: install_ubuntu_deps
	sudo apt install entr

install_ubuntu_deps:
	sudo apt install sassc
