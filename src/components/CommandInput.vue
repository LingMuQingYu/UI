<template>
  <el-autocomplete
    ref="commandInput"
    v-model="command"
    :debounce="50"
    :fetch-suggestions="querySearch"
    :select-when-unmatched="false"
    :trigger-on-focus="false"
    class="inline-input"
    placeholder="此处可输入命令，按回车执行"
    @select="handleSelect"
    @focus="addEventListener"
    @blur="removeEventListener"
  />
</template>

<script>
import { COMMAND_CONFIGS } from "../app/service/command_config";
export default {
  props: {
    value: {
      type: String
    },
    configType: {
      type: String
    }
  },
  data: function () {
    return {
      command: "",
      commandConfigs: COMMAND_CONFIGS,
      allCommand: {},
      defaultCommands: []
    };
  },
  methods: {
    createFilter(queryString) {
      return (restaurant) => {
        return (
          (restaurant.value ? restaurant.value : restaurant)
            .toLowerCase()
            .indexOf(queryString.toLowerCase()) !== -1
        );
      };
    },
    querySearch(text, callback) {
      this.command = text;
      this.$emit("change", this.command);
      // console.log("querySearch  ==> " + text);
      if (!text) return callback([]);
      const commandSlices = text.split(" ");
      if (commandSlices.length === 1) {
        callback(
          this.defaultCommands
            .filter(this.createFilter(text))
            .map((r) => ({ value: r, command: r }))
        );
        return;
      }
      const start = commandSlices[0];
      const allChild = this.allCommand[start];
      if (allChild && commandSlices.length - 1 <= allChild.length) {
        const child = allChild[commandSlices.length - 2];
        callback(
          child.filter(this.createFilter(commandSlices[commandSlices.length - 1])).map((r) => {
            let value = r;
            let command;
            if (value.value) {
              command =
                commandSlices.slice(0, commandSlices.length - 1).join(" ") + " " + value.command;
              value = value.value;
            } else {
              command = commandSlices.slice(0, commandSlices.length - 1).join(" ") + " " + r;
            }
            return {
              value: value,
              command: command
            };
          })
        );
        return;
      }
      callback([]);
    },
    handleSelect(item) {
      // console.log("handleSelect  ==> " + item.command);
      this.command = item.command;
      this.$refs.commandInput.focus();
      this.$emit("change", item.command);
    },
    addEventListener() {
      window.addEventListener("keydown", this.keyFun, true);
    },
    removeEventListener() {
      window.removeEventListener("keydown", this.keyFun, true);
    },
    keyFun(event) {
      if (event.keyCode === 9) {
        // 阻止默认事件
        event.preventDefault();
        let selectNode = null;
        const allNodes = this.$refs.commandInput.suggestions;
        const highlighted = window.document.getElementsByClassName("highlighted");
        if (highlighted && highlighted.length) {
          selectNode = highlighted[0].innerText;
          selectNode = allNodes.find((r) => r.value === selectNode);
        } else if (allNodes.length) {
          selectNode = allNodes[0];
        }
        if (selectNode) {
          this.$refs.commandInput.select(selectNode);
          this.$refs.commandInput.inputRef.handleBlur();
          setTimeout(() => {
            this.$refs.commandInput.inputRef.handleFocus();
          }, 30);
        }
      } else if (event.keyCode === 13) {
        this.$emit("sendCommand", this.command);
        event.preventDefault();
      }
    }
  },
  watch: {
    value(now) {
      if (now !== this.command) {
        this.command = now;
      }
    },
    configType(configType) {
      const allCommand = this.commandConfigs.find((r) => r.type === configType);
      if (allCommand) {
        this.allCommand = allCommand.instructs;
        this.defaultCommands = Object.keys(this.allCommand);
      }
    }
  }
};
</script>

<style scoped></style>
