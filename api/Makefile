NAMESPACE = hoyt-alley-creative-space

all: auth connect deploy

endpoints: email

auth:
	doctl auth init -t $$DO_TOKEN
	doctl serverless connect

connect:
	doctl serverless connect ${NAMESPACE}

deploy:
	doctl serverless deploy . --remote-build

install_ubuntu_build_deps:
	sudo snap install doctl
