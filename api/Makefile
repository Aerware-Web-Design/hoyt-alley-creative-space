NAMESPACE = hoyt-alley-creative-space

.PHONY: all auth connect deploy intall_ubuntu_deps

all: auth connect deploy

endpoints: email

auth:
	doctl auth init -t $$DO_TOKEN

connect:
	doctl serverless connect ${NAMESPACE}

deploy:
	doctl serverless deploy . --remote-build

install_ubuntu_deps:
	sudo snap install doctl
