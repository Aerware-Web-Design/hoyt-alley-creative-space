NAMESPACE = hoyt-alley-creative-space
REGION = sfo3

.PHONY: all auth namespace intall_ubuntu_deps

all: auth namespace

auth:
	doctl auth init -t $$DO_TOKEN

namespace:
	$(eval $@_exists = "`doctl serverless namespaces list | grep '${NAMESPACE}'`")

	if [ ${$@_exists} ]; then \
		echo ${NAMESPACE} already exists; \
	else \
		doctl serverless namespaces create --label ${NAMESPACE} --region ${REGION}; \
	fi

install_ubuntu_deps:
	sudo snap install doctl
