.PHONY: all web infra api

all: web infra api

web:
	cd web && make

infra:
	cd infra && make

api: infra
	cd api && make

install_ubuntu_deps:
	cd web && make $@
	cd infra && make $@
	cd api && make $@
