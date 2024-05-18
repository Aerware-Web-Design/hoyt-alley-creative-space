.PHONY: all web infra api

all: web infra api

web:
	cd web && make

infra:
	cd infra && make

api: infra
	cd api && make

dev:
	cd web && make $@

install_ubuntu_dev_deps: install_ubuntu_deps
	cd web && make $@

install_ubuntu_deps:
	cd web && make $@
	cd infra && make $@
	cd api && make $@
